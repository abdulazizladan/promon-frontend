import { createAction, props } from "@ngrx/store";
import { Project } from "../models/project.model";

/**
 * 
 */
export const loadProjects = createAction(
    '[Project] Load Projects'
);
export const AddProjects = createAction(
    '[Project] Add Project',
    props<{project: Project}>()
);
export const removeProject = createAction(
    '[Project] Remove Project',
    props<{id: string}>()
);