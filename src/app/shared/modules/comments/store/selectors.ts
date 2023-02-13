import { createSelector } from "@ngrx/store";
import { CommentsStateInterface } from "src/app/shared/modules/comments/types/comments-state.interface";
import { AppStateInterface } from "src/app/shared/types/appState.interface";

export const commentsFeatureSelector = (state: AppStateInterface) => state.comments;

export const isSubmittingSaveCommentSelector = createSelector(
  commentsFeatureSelector,
  (commentsState: CommentsStateInterface) => commentsState.isSubmitting
);

export const validationErrorsSaveCommentSelector = createSelector(
  commentsFeatureSelector,
  (commentsState: CommentsStateInterface) => commentsState.validationErrors
);

export const dataCommentSelector = createSelector(
  commentsFeatureSelector,
  (commentsState: CommentsStateInterface) => commentsState.data
);
