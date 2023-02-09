import { createSelector } from '@ngrx/store';
import { EditArticleStateInterface } from 'src/app/edit-article/types/edit-article-state.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

export const editArticleFeatureSelector = (state: AppStateInterface) =>
  state.editArticle;

export const isSubmittingEditArticleSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) =>
    createArticleState.isSubmitting
);

export const validationErrorsEditArticleSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) =>
    createArticleState.validationErrors
);

export const isLoadingEditArticleSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) =>
    createArticleState.isLoading
);

export const articleEditArticleSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) => createArticleState.article
);
