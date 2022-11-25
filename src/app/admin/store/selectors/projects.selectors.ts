import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Project } from "../../models/project.model";
import * as fromProjects from '../reducers/admin.reducer';

export const selectProjectsState = createFeatureSelector<fromProjects.State>(fromProjects.AdminFeatureKey)


//export const selectProjects = createFeatureSelector<Array<Project>>('admin')
