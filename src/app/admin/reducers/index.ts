import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { AddProjects } from '../actions/project.actions';
import { loadProjects } from '../actions/project.actions';
import { AddContractor } from '../actions/contractor.actions';
import { loadContractors } from '../actions/contractor.actions';
import { AddUser } from '../actions/user.actions';
import { loadUsers } from '../actions/user.actions';
import { environment } from '../../../environments/environment';
import { Contractor } from '../models/contractor.model';
import { Project } from '../models/project.model';
import { User } from 'src/app/auth/models/User.model';

export const adminFeatureKey = 'admin';

export interface AdminState {
}

export const initialAdminState: AdminState = {
}

//export const reducers:   ActionReducerMap<AdminState> = {};

export const adminReducer = createReducer(
  initialAdminState
);
