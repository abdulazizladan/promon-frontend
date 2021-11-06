import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { signin } from '../auth.actions';
import { User } from '../models/User.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  token: string
}

export const initialAuthState: AuthState = {
  token : ''
}

//export const reducers: ActionReducerMap<AuthState> = {
//};

export const authReducer = createReducer(
  on(signin, (state, action) => {
    return {
      token : action.user
    }
  })
)
