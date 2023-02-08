import { createAction, props } from "@ngrx/store";
import { ArticleInputInterface } from "src/app/shared/types/article-input.interface";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { BackendErrorInterface } from "src/app/shared/types/backendError.interface";
import { ActionTypes } from "../actionTypes";

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);
