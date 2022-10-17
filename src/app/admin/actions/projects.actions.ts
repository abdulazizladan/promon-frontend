import { props, createAction } from "@ngrx/store";
import { Project } from '../models/project.model'

export const loadProjectsAction = createAction(
  '[Project] Load projects'
)

export const addProject = createAction(
  '[Project] Add Project',
  props<{project: Project}>
)

export const removeProject = createAction(
  '[Project] Remove Project',
  props<{project: Project}>
)

