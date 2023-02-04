import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import { PopularTagType } from "src/app/shared/types/popular-tag.type";
import { TagsPopularService } from "../../services/tags-popular.service";
import { getTagsPopularAction, getTagsPopularFailureAction, getTagsPopularSuccessAction } from "../actions/get-tags-popular.action";

@Injectable()
export class GetTagsPopularEffect {

  constructor(private actions$: Actions, private tagsPopularService: TagsPopularService) { }

  getTagsPopularEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTagsPopularAction),
      switchMap(() => {
        return this.tagsPopularService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getTagsPopularSuccessAction({ popularTags });
          }),
          catchError(() => {
            return of(getTagsPopularFailureAction());
          })
        )
      })
    ))

}
