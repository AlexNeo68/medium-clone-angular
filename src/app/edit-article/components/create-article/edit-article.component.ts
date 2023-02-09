import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { editArticleAction } from 'src/app/edit-article/store/actions/edit-article.action';
import { getArticleAction } from 'src/app/edit-article/store/actions/get-article.action';
import { articleEditArticleSelector, isLoadingEditArticleSelector, isSubmittingEditArticleSelector, validationErrorsEditArticleSelector } from 'src/app/edit-article/store/selectors';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';


@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})

export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  isLoading$: Observable<boolean>;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorInterface | null>;
  slug: string = '';

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData()
    this.initialValues()
  }


  initialValues(): void {
    this.isLoading$ = this.store.pipe(
      select(isLoadingEditArticleSelector)
    );
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingEditArticleSelector)
    );
    this.backendErrors$ = this.store.pipe(
      select(validationErrorsEditArticleSelector)
    );
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.initialValues$ = this.store.pipe(select(articleEditArticleSelector), filter(Boolean), map((article: ArticleInterface) => ({
      title: article.title,
      body: article.body,
      description: article.description,
      tagList: article.tagList,
    })))
  }
  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  onArticleSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(editArticleAction({ slug: this.slug, articleInput }));
  }
}
