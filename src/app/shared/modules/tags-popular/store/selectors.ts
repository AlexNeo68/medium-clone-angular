import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { TagsPopularStateInterface } from "../types/tags-popular-state.interface";


export const tagsPopularFeatureSelector = createFeatureSelector<AppStateInterface, TagsPopularStateInterface>('popularTags');

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
