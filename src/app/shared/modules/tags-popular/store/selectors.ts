import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { TagsPopularStateInterface } from "../types/tags-popular-state.interface";




export const tagsPopularFeatureSelector = (state: AppStateInterface) => state.popularTags;

export const isLoadingSelector = createSelector(
  tagsPopularFeatureSelector,
  (tagsPopularState: TagsPopularStateInterface) => tagsPopularState.isLoading
);

export const errorSelector = createSelector(
  tagsPopularFeatureSelector,
  (tagsPopularState: TagsPopularStateInterface) => tagsPopularState.error
);


export const tagsPopularSelector = createSelector(
  tagsPopularFeatureSelector,
  (tagsPopularState: TagsPopularStateInterface) => tagsPopularState.data
);
