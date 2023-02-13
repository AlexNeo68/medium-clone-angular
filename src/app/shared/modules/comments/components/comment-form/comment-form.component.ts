import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { commentSaveAction } from 'src/app/shared/modules/comments/store/actions/comment-save.action';
import { isSubmittingSaveCommentSelector, validationErrorsSaveCommentSelector } from 'src/app/shared/modules/comments/store/selectors';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';

@Component({
  selector: 'mc-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  form: FormGroup
  @Input('articleSlug') articleSlugProps: string;

  errors$: Observable<BackendErrorInterface>;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initialValues()
  }

  initialValues(): void {
    this.form = this.fb.group({
      body: ''
    })
    this.errors$ = this.store.pipe(select(validationErrorsSaveCommentSelector));
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSaveCommentSelector));
  }

  onSubmit(): void {
    this.store.dispatch(commentSaveAction({ slug: this.articleSlugProps, commentInput: this.form.value }))
    this.form.reset();
  }



}
