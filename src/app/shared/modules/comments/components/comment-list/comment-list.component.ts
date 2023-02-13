import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCommentsAction } from 'src/app/shared/modules/comments/store/actions/comments-get.action';
import { dataCommentSelector } from 'src/app/shared/modules/comments/store/selectors';
import { CommentInterface } from 'src/app/shared/modules/comments/types/comment.interface';

@Component({
  selector: 'mc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input('articleSlug') articleSlugProps: string;

  comments$: Observable<CommentInterface[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues()
    this.getComments()
  }

  initializeValues() {
    this.comments$ = this.store.pipe(select(dataCommentSelector))
  }

  getComments() {
    this.store.dispatch(getCommentsAction({ slug: this.articleSlugProps }))
  }
}
