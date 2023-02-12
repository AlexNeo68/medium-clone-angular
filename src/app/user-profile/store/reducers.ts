
import { Action, createReducer, on } from "@ngrx/store";
import { GetUserProfileAction, GetUserProfileFailureAction, GetUserProfileSuccessAction } from "src/app/user-profile/store/actions/get-user-profile.action";
import { UserProfileStateInterface } from "src/app/user-profile/types/user-profile-state.interface";


const initialState: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const userProfileReducer = createReducer(initialState,
  on(GetUserProfileAction, (state): UserProfileStateInterface => ({
    ...state, isLoading: true
  })),
  on(GetUserProfileSuccessAction, (state, action): UserProfileStateInterface => ({
    ...state, isLoading: false, data: action.profile
  })),
  on(GetUserProfileFailureAction, (state): UserProfileStateInterface => ({
    ...state, isLoading: false
  })),
);

export function reducer(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action)
}
