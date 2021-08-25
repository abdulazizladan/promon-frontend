import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { loadProjects } from '../actions/project.actions';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';
import { User } from 'src/app/auth/models/User.model';

export const adminFeatureKey = 'admin';

export interface State {
  
}

export const reducers: ActionReducerMap<State> = {};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
