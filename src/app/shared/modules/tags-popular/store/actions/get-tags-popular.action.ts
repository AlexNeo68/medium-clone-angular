import { createAction, props } from "@ngrx/store";
import { PopularTagType } from "src/app/shared/types/popular-tag.type";
import { ActionTypes } from "src/app/shared/modules/tags-popular/store/action-types";


export const getTagsPopularAction = createAction(
  ActionTypes.GET_TAGS_POPULAR);

export const getTagsPopularSuccessAction = createAction(
  ActionTypes.GET_TAGS_POPULAR_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
);

export const getTagsPopularFailureAction = createAction(
  ActionTypes.GET_TAGS_POPULAR_FAILURE
);
