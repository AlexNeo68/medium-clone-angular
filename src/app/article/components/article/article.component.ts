import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { getArticleAction } from '../../store/actions/get-article.action';
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/selectors';


@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<null | string>;

  slug: string;

  article: ArticleInterface | null
  articleSubscription: Subscription


  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  initializeValue(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  initializeListener(): void {
    this.articleSubscription = this.store.pipe(select(articleSelector)).subscribe((article: ArticleInterface) => {
      this.article = article;
    });
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

}
