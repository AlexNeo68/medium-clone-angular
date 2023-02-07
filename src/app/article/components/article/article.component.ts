import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { deleteArticleAction } from '../../store/actions/delete-article.action';
import { getArticleAction } from '../../store/actions/get-article.action';
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/selectors';


@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {

  slug: string;
  isAuthor$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  error$: Observable<null | string>;


  article: ArticleInterface | null
  articleSubscription: Subscription


  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.initializeValue();
    this.initializeListener();
    this.fetchData();
  }



  initializeValue(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(currentUserSelector)),
      this.store.pipe(select(articleSelector))).pipe(map(([currentUser, article]: [CurrentUserInterface, ArticleInterface]) => {
        if (!currentUser || !article) return false;
        return currentUser.username === article.author.username;
      }))
  }

  initializeListener(): void {
    this.articleSubscription = this.store.pipe(select(articleSelector)).subscribe((article: ArticleInterface) => {
      this.article = article;
    });
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }

}
