import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { errorMessage } from '@app/core/helper';
import { CategoryService } from '@app/core/services/category.service';
import { PostService } from '@app/core/services/post.service';
import { VariableService } from '@app/core/services/variable.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private variableService: VariableService,
    private toastr: ToastrService,
    public categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPostById();
    });
  }

  getPostById() {
    this.isPostLoading = true;
    this.changeDetector.detectChanges();
    this.postService.getPostById(this.id).subscribe({
      next: (data: any) => {
        this.post = data.posts;
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

  openVersions() {}
}
