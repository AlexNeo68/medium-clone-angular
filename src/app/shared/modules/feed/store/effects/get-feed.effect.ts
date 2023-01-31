import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { FeedService } from "../../services/feed.service";
import { GetFeedResponseInterface } from "../../types/get-feed-response.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/get-feed.action";
import { of } from 'rxjs'

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) { }

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        )
      })
    ))

}
