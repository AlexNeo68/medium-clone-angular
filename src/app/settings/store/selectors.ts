import { createSelector } from '@ngrx/store';
import { SettingsStateInterface } from 'src/app/settings/types/settingsState.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

export const settingsFeatureSelector = (state: AppStateInterface) => state.settings;

export const isSubmittingSettingsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const validationErrorsSettingsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);

