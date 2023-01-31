import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { getCurrentUserAction, GetCurrentUserFailureAction, getCurrentUserSuccessAction } from './actions/getCurrentUser.action';
import { loginAction, loginSuccessAction, loginFailureAction } from './actions/login.action';
import { registerAction, registerSuccessAction, registerFailureAction } from './actions/register.action';


const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(registerFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(loginAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(loginSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(loginFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(getCurrentUserAction, (state) => ({
    ...state,
    isLoading: true
  })),
  on(getCurrentUserSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(GetCurrentUserFailureAction, (state) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null
  })),
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
