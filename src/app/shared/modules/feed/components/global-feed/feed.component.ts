import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeedAction } from '../../store/actions/get-feed.action';
import { dataSelector, errorSelector, isLoadingSelector } from '../../store/selectors';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>
  error$: Observable<null | string>
  feed$: Observable<GetFeedResponseInterface | null>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.fetchData();
    this.initializeValue();
  }

  initializeValue() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(dataSelector))
  }

  fetchData() {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
  }
}
