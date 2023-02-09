import { Action, createReducer, on } from '@ngrx/store';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from 'src/app/edit-article/store/actions/edit-article.action';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from 'src/app/edit-article/store/actions/get-article.action';
import { EditArticleStateInterface } from 'src/app/edit-article/types/edit-article-state.interface';

const initialState: EditArticleStateInterface = {
  isSubmitting: false,
  isLoading: false,
  article: null,
  validationErrors: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(editArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(editArticleSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(editArticleFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducer(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
