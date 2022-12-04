import { createAction, props } from "@ngrx/store";
import { Project } from "../models/project.model";

export const addProject = createAction('[PROJECTS] Add Project', props<{ project: Project}>());

export const removeProject = createAction('[PROJECTS] Remove Project', props<{ id: string}>())

export const loadProjects = createAction('[PROJECTS] Load All Projects');

export const loadProjectsSuccess = createAction('[PROJECTS] Load All Projects Success', props<{ projects: Project[]}>());

export const loadProjectsFailure = createAction('[PROAJECTS] Load All Projects Failure', props<{ error: string}>());


