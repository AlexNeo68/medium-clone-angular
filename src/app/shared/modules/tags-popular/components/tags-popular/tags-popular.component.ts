import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';
import { getTagsPopularAction } from '../../store/actions/get-tags-popular.action';
import { errorSelector, isLoadingSelector, tagsPopularSelector } from '../../store/selectors';

@Component({
  selector: 'mc-tags-popular',
  templateUrl: './tags-popular.component.html',
})

export class TagsPopularComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>
  tagsPopular$: Observable<PopularTagType[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.tagsPopular$ = this.store.pipe(select(tagsPopularSelector));
  }
  fetchData(): void {
    this.store.dispatch(getTagsPopularAction());
  }
}
