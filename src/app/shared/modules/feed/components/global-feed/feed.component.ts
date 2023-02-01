import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getFeedAction } from '../../store/actions/get-feed.action';
import {
  dataSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<null | string>;
  feed$: Observable<GetFeedResponseInterface | null>;

  limit: number = Number(environment.limit);
  baseUrl: string;
  currentPage: number;
  queryParamsSubscription: Subscription;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValue();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeValue() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(dataSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListener() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
      }
    );
  }

  fetchData() {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
