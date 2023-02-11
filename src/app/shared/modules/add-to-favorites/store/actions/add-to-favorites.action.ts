import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/shared/modules/add-to-favorites/store/actionTypes";
import { ArticleInterface } from "src/app/shared/types/article.interface";

export const AddToFavoriteAction = createAction(ActionTypes.ADD_TO_FAVORITE,
  props<{ isFavorited: boolean; slug: string }>()
);

export const AddToFavoriteSuccessAction = createAction(ActionTypes.ADD_TO_FAVORITE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const AddToFavoriteFailureAction = createAction(ActionTypes.ADD_TO_FAVORITE_FAILURE);
