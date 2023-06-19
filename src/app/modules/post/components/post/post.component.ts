import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { errorMessage, formateDate, successMessage } from '@app/core/helper';
import { CategoryService } from '@app/core/services/category.service';
import { PostService } from '@app/core/services/post.service';
import { VariableService } from '@app/core/services/variable.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PostVersionsComponent } from '../post-versions/post-versions.component';
import { HelperService } from '@app/core/services/helper.service';
import { ConfirmationModalComponent } from '@app/shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'bb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public post: any;
  public id: any;
  public isPostLoading: boolean = false;
  public postContent: string;
  public variables: any[] = [];
  public postHistory: any[] = [];
  public isVersionPost: boolean = false;
  public users: any[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private variableService: VariableService,
    private toastr: ToastrService,
    public categoryService: CategoryService,
    private modalService: NgbModal,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    if (this.router.url.split('/')[2] === 'post-version') {
      this.isVersionPost = true;
      this.changeDetector.detectChanges();
    }
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.isVersionPost) {
        this.getPostVersionById();
      } else this.getPostById();
    });
  }

  getPostById() {
    this.isPostLoading = true;
    this.changeDetector.detectChanges();
    this.postService.getPostById(this.id).subscribe({
      next: (data: any) => {
        this.post = data.posts;
        this.postHistory = data.post_histories;
        let userIds = [];
        userIds.push(Number(this.post.created_by));
        if (!userIds.includes(Number(this.post?.updated_by))) {
          userIds.push(Number(this.post?.updated_by));
        }
        this.postHistory.forEach(item => {
          let id = Number(item.created_by);
          if (!userIds.includes(id)) {
            userIds.push(id);
          }
        });
        this.getUsersById(userIds);
        this.getVariables(JSON.parse(this.post.variable_ids));
      },
      error: (error: any) => {
        this.isPostLoading = false;
        this.changeDetector.detectChanges();
        errorMessage(error, this.toastr);
      },
    });
  }

  getVariables(vars: number[]) {
    const body = {
      ids: vars,
    };
    this.variableService.getVariablesByIds(body).subscribe({
      next: (data: any) => {
        this.variables = data.vars;
        this.isPostLoading = false;
        this.changeDetector.detectChanges();
      },
      error: (error: any) => {
        errorMessage(error, this.toastr);
        this.isPostLoading = false;
        this.changeDetector.detectChanges();
      },
    });
  }

  navigateSubcategory() {
    this.router.navigate([
      'categories/list/subcategory/' + this.post?.sub_category_id,
    ]);
  }
  navigateEditPost() {
    this.router.navigate(['categories/article/edit/' + this.id]);
  }
  navigatePost(id: any) {
    this.router.navigate(['/posts/post/' + id]);
  }

  openVersions() {
    const modalRef = this.modalService.open(PostVersionsComponent, {
      scrollable: true,
      modalDialogClass: 'mw-1020',
      centered: true,
    });
    modalRef.componentInstance.postHistoryList = this.postHistory;
    modalRef.componentInstance.activePost = this.postHistory.find(
      post => post.is_current === 1
    );
    modalRef.componentInstance.users = this.users;
  }

  getPostVersionById() {
    this.isPostLoading = true;
    this.changeDetector.detectChanges();
    this.postService.getPostVersionById(this.id).subscribe({
      next: (data: any) => {
        this.post = data.posts;
        let userIds = [];
        userIds.push(Number(this.post.created_by));
        if (!userIds.includes(Number(this.post?.updated_by))) {
          userIds.push(Number(this.post?.updated_by));
        }
        this.getUsersById(userIds);
        //this.postHistory = data.post_histories;
        this.getVariables(JSON.parse(this.post.variable_ids));
      },
      error: (error: any) => {
        this.isPostLoading = false;
        this.changeDetector.detectChanges();
        errorMessage(error, this.toastr);
      },
    });
  }

  revertPostVersion() {
    let body = {
      post_id: this.post.post_id,
      post_history_id: this.post.id,
    };
    this.postService.revertPostVersion(body).subscribe({
      next: (data: any) => {
        this.navigatePost(data?.posts.id);
      },
      error: (error: any) => {
        errorMessage(error, this.toastr);
      },
    });
  }

  getUsersById(ids: number[]) {
    this.helperService.getUsersByIds(ids).subscribe({
      next: (data: any) => {
        this.users = data?.users;
        this.changeDetector.detectChanges();
      },
      error: (error: any) => {
        errorMessage(error, this.toastr);
      },
    });
  }

  getUserName(id: any) {
    if (this.users.length) {
      return this.users.find(us => us.id === id)?.name;
    }
    return '';
  }

  formatDate(date: string) {
    if (date) {
      return formateDate(date);
    }
    return '';
  }

  deletePost() {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.message = `Вы действительно хотите удалить пост "${this.post.title}"?`;
    modalRef.result.then(result => {
      if (result) {
        this.postService.deletePost(this.id).subscribe({
          next: (data: any) => {
            successMessage(
              `Пост ${this.post?.title} успешно удален`,
              this.toastr
            );
            this.navigateSubcategory();
          },
          error: (error: any) => {
            errorMessage(error, this.toastr);
          },
        });
      }
    });
  }
}
