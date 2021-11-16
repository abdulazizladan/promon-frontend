import {
  createSelector,
  createFeatureSelector } from "@ngrx/store";
import { Project } from "../models/project.model";
import { ProjectsState } from "../reducers";

export const selectProjetcsState = createFeatureSelector<ProjectsState>('projects');

const selectAllProjects = createSelector(
  selectProjetcsState,
  (state: ProjectsState) => state.projects
)
