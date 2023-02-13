import { Action, createReducer, on } from "@ngrx/store";
import { commentSaveAction, commentSaveActionFailure, commentSaveActionSuccess } from "src/app/shared/modules/comments/store/actions/comment-save.action";
import { CommentsStateInterface } from "src/app/shared/modules/comments/types/comments-state.interface";

const initialState: CommentsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  data: [],
  isLoading: false,
  error: null
}

const commentsReducer = createReducer(initialState,

  on(commentSaveAction, state => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),

  on(commentSaveActionSuccess, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: null,
    data: [action.comment, ...state.data]
  })),

  on(commentSaveActionFailure, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
)

export function reducer(state: CommentsStateInterface, action: Action) {
  return commentsReducer(state, action);
}

