import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { createArticleAction } from '../../store/actions/edit-article.action';
import {
  isSubmittingCreateArticleSelector,
  validationErrorsCreateArticleSelector,
} from '../../store/selectors';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    body: '',
    description: '',
    tagList: [],
  };

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingCreateArticleSelector)
    );
    this.backendErrors$ = this.store.pipe(
      select(validationErrorsCreateArticleSelector)
    );
  }

  onArticleSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
