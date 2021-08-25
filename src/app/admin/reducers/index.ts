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
import { Contractor } from '../models/contractor.model';
import { Project } from '../models/project.model';
import { User } from 'src/app/auth/models/User.model';

export const adminFeatureKey = 'admin';

export interface AdminState {
  projects: Project[],
  users: User[],
  contractors: Contractor[]
}

export const initialAdminState: AdminState = {
  projects: [],
  users: [],
  contractors: []
}

//export const reducers:   ActionReducerMap<AdminState> = {};

export const adminReducer = createReducer(
  initialAdminState,
  
);
