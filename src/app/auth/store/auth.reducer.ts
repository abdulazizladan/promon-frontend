import { createReducer } from "@ngrx/store";

export interface AuthState {
  'token': string,
  loading: boolean
}

export const AuthFeatureKey = 'auth';

export const initiatState: AuthState = {
  token: '',
  loading: false
}

export const AuthReducer = createReducer(
  initiatState
)
