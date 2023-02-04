import { routerNavigatedAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { TagsPopularStateInterface } from "../types/tags-popular-state.interface";
import { getTagsPopularAction, getTagsPopularFailureAction, getTagsPopularSuccessAction } from "./actions/get-tags-popular.action";


const initialState: TagsPopularStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const tagsPopularReducer = createReducer(initialState,
  on(getTagsPopularAction, (state): TagsPopularStateInterface => ({
    ...state, isLoading: true
  })),
  on(getTagsPopularSuccessAction, (state, action): TagsPopularStateInterface => ({
    ...state, isLoading: false, data: action.popularTags
  })),
  on(getTagsPopularFailureAction, (state): TagsPopularStateInterface => ({
    ...state, isLoading: false
  })),
);

export function reducer(state: TagsPopularStateInterface, action: Action) {
  return tagsPopularReducer(state, action)
}
