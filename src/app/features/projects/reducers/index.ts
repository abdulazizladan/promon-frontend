import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { Project } from '../models/project.model';
import { environment } from '../../../../environments/environment';
import { loadProjects, loadSingleProject } from '../actions/project.actions';

export const projectsFeatureKey = 'projects';

export interface ProjectsState {
  projects: Project[]
}

export const initialProjectsState: ProjectsState = {
  projects: []
}

export const projectsReducers = createReducer(
  initialProjectsState,
  on(loadProjects, (state) =>
    ({...state, loading: true})
  ),
  on(loadSingleProject, (state) => ({...state}))
)
