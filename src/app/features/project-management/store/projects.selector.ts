import { createSelector, createFeatureSelector } from "@ngrx/store";
import { ProjectsState } from "./project.reducer";

export const getProjectsState = createFeatureSelector<ProjectsState>('projects')
