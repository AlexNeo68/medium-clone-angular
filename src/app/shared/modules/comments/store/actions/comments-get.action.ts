import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/shared/modules/comments/store/ActionTypes";
import { CommentsGetResponseInterface } from "src/app/shared/modules/comments/types/comments-get-response.interface";

export const getCommentsAction = createAction(
  ActionTypes.COMMENTS_GET,
  props<{ slug: string }>()
);

export const getCommentsSuccessAction = createAction(
  ActionTypes.COMMENTS_GET_SUCCESS,
  props<CommentsGetResponseInterface>()
);

export const getCommentsFailureAction = createAction(
  ActionTypes.COMMENTS_GET_FAILURE
);
