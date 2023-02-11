export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = '[Auth] LOGIN success',
  LOGIN_FAILURE = '[Auth] LOGIN failure',

  GET_CURRENT_USER = '[Auth] Get Current User',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get Current User failure',

  UPDATE_CURRENT_USER = '[Auth] Update Current User',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update Current User success',
  UPDATE_CURRENT_USER_FAILURE = '[Auth] Update Current User failure',

  LOGOUT = '[Auth] Logout',
}
