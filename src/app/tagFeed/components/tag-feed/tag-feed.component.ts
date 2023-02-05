import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit, OnDestroy {

  apiUrl: string = '';
  tagName: string = '';

  slugTagSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.initializeValues()
  }

  ngOnDestroy(): void {
    this.slugTagSubscription.unsubscribe();
  }

  initializeValues() {
    this.slugTagSubscription = this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    })
  }
}
