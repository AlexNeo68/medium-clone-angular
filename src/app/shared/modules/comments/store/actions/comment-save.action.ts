import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/shared/modules/comments/store/ActionTypes";
import { CommentInputInterface } from "src/app/shared/modules/comments/types/comment-input.interface";
import { CommentInterface } from "src/app/shared/modules/comments/types/comment.interface";
import { BackendErrorInterface } from "src/app/shared/types/backendError.interface";

export const commentSaveAction = createAction(
  ActionTypes.COMMENT_SAVE,
  props<{ slug: string, commentInput: CommentInputInterface }>()
)

export const commentSaveActionSuccess = createAction(
  ActionTypes.COMMENT_SAVE_SUCCESS,
  props<{ comment: CommentInterface }>()
)

export const commentSaveActionFailure = createAction(
  ActionTypes.COMMENT_SAVE_FAILURE,
  props<{ errors: BackendErrorInterface }>()
)
