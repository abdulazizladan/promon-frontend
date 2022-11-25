import { props, createAction } from "@ngrx/store";
import { Project } from '../../models/project.model'



export const loadProjects = createAction(
  '[Projects] Load projects'
)

export const loadProjectsSuccess = createAction(
  '[Projects] LoadProjectsSuccess'
)

export const loadProjectsFailure = createAction(
  '[Projects] LoadProjectsFailure'
)

export const addProject = createAction(
  '[Project] Add Project',
  props<{project: Project}>
)

export const removeProject = createAction(
  '[Project] Remove Project',
  props<{project: Project}>
)

