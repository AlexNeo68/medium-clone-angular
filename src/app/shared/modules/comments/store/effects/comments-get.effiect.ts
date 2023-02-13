import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CommentsService } from "src/app/shared/modules/comments/services/comments.service";
import { getCommentsAction, getCommentsFailureAction, getCommentsSuccessAction } from "src/app/shared/modules/comments/store/actions/comments-get.action";
import { CommentInterface } from "src/app/shared/modules/comments/types/comment.interface";

@Injectable()
export class CommentsGetEffect {
  constructor(private actions$: Actions, private commentsService: CommentsService) { }

  commentsGet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCommentsAction),
      switchMap(({ slug }) => {
        return this.commentsService.getComments(slug).pipe(
          map((comments: CommentInterface[]) => {
            return getCommentsSuccessAction({ comments });
          }),
          catchError(() => {
            return of(getCommentsFailureAction());
          })
        )
      })
    )
  })
}
