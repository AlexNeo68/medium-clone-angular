import { createAction, props } from "@ngrx/store";
import { GetArticleResponseInterface } from "src/app/shared/types/get-article-response.interface";
import { ActionTypes } from "../actionTypes";

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<GetArticleResponseInterface>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
