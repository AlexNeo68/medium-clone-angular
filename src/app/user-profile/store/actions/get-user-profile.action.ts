import { createAction, props } from "@ngrx/store";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { ActionTypes } from "src/app/user-profile/store/actionTypes";

export const GetUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ username: string }>()
)

export const GetUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ profile: ProfileInterface }>()
)

export const GetUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE
)

