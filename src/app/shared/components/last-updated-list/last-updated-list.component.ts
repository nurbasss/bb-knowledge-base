import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formateDate, generateRandomColor } from '@app/core/helper';
import { PostService } from '@app/core/services/post.service';

@Component({
  selector: 'bb-last-updated-list',
  templateUrl: './last-updated-list.component.html',
  styleUrls: ['./last-updated-list.component.scss'],
})
export class LastUpdatedListComponent implements OnInit {
  public updatesList: any[] = [];
  public isListLoading: boolean = false;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.isListLoading = true;
    this.changeDetector.detectChanges();
    this.postService.getAllPosts().subscribe((data: any) => {
      this.isListLoading = false;
      let list = data?.posts;
      list.sort((a: any, b: any) => {
        const dateA = new Date(a?.updated_at).getTime();
        const dateB = new Date(b?.updated_at).getTime();
        return dateB - dateA;
      });
      this.updatesList = [...list.slice(0, 5)];
      this.changeDetector.detectChanges();
    });
  }

  navigatePost(id: any) {
    this.router.navigate(['/posts/post/' + id]);
  }

  getColor(i: number) {
    return generateRandomColor(i);
  }

  formatDate(date: string) {
    if (date) {
      return formateDate(date);
    }
    return '';
  }
}
