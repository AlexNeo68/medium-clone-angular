import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { CreateArticleStateInterface } from "../types/create-article-state.interface";

export const createArticleFeatureSelector = (state: AppStateInterface) => state.createArticle;

export const isSubmittingCreateArticleSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
);

export const validationErrorsCreateArticleSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
);
