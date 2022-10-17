import { createReducer } from "@ngrx/store";

export interface State {
  'email': string,
  'token': string,
  loading: boolean
}

export const AuthFeatureKey = 'auth';

export const initiatState: State = {
  'email': '',
  token: '',
  loading: false
}

export const AuthReducer = createReducer(
  initiatState
)
