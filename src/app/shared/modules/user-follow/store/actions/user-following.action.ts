import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/shared/modules/user-follow/store/actionTypes";
import { ProfileInterface } from "src/app/shared/types/profile.interface";

export const userFollowingAction = createAction(
  ActionTypes.USER_FOLLOWING,
  props<{ isFollowing: boolean, username: string }>()
);

export const userFollowingSuccessAction = createAction(
  ActionTypes.USER_FOLLOWING_SUCCESS,
  props<{ profile: ProfileInterface }>()
);

export const userFollowingFailureAction = createAction(
  ActionTypes.USER_FOLLOWING_FAILURE
);
