import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { UserProfileStateInterface } from "src/app/user-profile/types/user-profile-state.interface";

export const userProfileFeatureSelector = (state: AppStateInterface) => state.userProfile;

export const isLoadingUserProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfile: UserProfileStateInterface) => userProfile.isLoading
);

export const errorUserProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfile: UserProfileStateInterface) => userProfile.error
);


export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfile: UserProfileStateInterface) => userProfile.data
);
