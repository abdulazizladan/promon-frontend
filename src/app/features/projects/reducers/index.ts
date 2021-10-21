import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Project } from '../models/project.model';
import { environment } from '../../../../environments/environment';

export const projectsFeatureKey = 'projects';

export interface ProjectsState {
  projects: Project[]
}

export const initialProjectsState: ProjectsState = {
  projects: []
}

export const projectsReducers = createReducer(
  initialProjectsState
)
