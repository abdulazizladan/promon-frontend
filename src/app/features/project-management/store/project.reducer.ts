import { createReducer, on } from "@ngrx/store";
import { Project, Status } from "../models/project.model";
import { loadProjects } from "./projects.actions";

export interface ProjectsState {
  projects: Project[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const projectsFeatureKey = "projects";

export const initialState: ProjectsState = {
  projects: [
    {
      id: '1248-b',
      title: 'furniture supply',
      description: 'Supply of 500 pcs chairs to GDSS Tandama',
      dateAdded: new Date(1669879707150),
      status: Status.notStarted

    },
    {
      id: '1428-b',
      title: 'medicine supply',
      description: 'Supply of 500 packs of Vitamin C to GDSS Akpugo',
      dateAdded: new Date(1679879727150),
      status: Status.completed

    }
  ],
  error: '',
  status: 'pending'
}

export const ProjectsReducer = createReducer(
  initialState,
  on(loadProjects, (state) => ({ ...state, status: 'loading'}))
)
