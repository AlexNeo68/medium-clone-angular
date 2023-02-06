import { routerNavigatedAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { ArticleStateInterface } from "../types/article-state.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/get-article.action";


const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const articleReducer = createReducer(initialState,
  on(getArticleAction, (state): ArticleStateInterface => ({
    ...state, isLoading: true
  })),
  on(getArticleSuccessAction, (state, action): ArticleStateInterface => ({
    ...state, isLoading: false, data: action.article
  })),
  on(getArticleFailureAction, (state): ArticleStateInterface => ({
    ...state, isLoading: false
  })),
);

export function reducer(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}
