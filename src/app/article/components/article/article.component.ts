import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';


@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<null | string>;
  article$: Observable<ArticleInterface | null>;


  constructor(
    private store: Store
  ) { }



  ngOnInit(): void {
    this.initializeValue();
    this.initializeListener();
  }

  ngOnDestroy(): void {
  }


  initializeValue() {
  }

  initializeListener() {

  }




}
