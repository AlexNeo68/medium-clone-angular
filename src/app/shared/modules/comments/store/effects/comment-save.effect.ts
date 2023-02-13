import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CommentsService } from "src/app/shared/modules/comments/services/comments.service";
import { commentSaveAction, commentSaveActionFailure, commentSaveActionSuccess } from "src/app/shared/modules/comments/store/actions/comment-save.action";
import { CommentInterface } from "src/app/shared/modules/comments/types/comment.interface";

export class CommentSaveEffect {
  constructor(private actions$: Actions, private commentsService: CommentsService) { }
  commentSave$ = createEffect(() => this.actions$.pipe(
    ofType(commentSaveAction),
    switchMap(({ slug, commentInput }) => this.commentsService.saveComment(slug, commentInput).pipe(
      map((comment: CommentInterface) => {
        return commentSaveActionSuccess({ comment });
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(commentSaveActionFailure({ errors: errorResponse.error.errors }))
      }))
    )
  ))
}
