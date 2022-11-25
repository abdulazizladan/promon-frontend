import { createReducer, on } from "@ngrx/store"
import { addProject, loadProjects } from "../actions/projects.actions";
import { Contractor } from "../../models/contractor.model";
import { Project } from "../../models/project.model"

export interface State {
  projects: Project[],
  contractors: Contractor[],
  loading: boolean
}

export const AdminFeatureKey = 'admin';

export const initialState: State = {
  projects: [
    //{ id: '21', title: 'furniture purchase', description: 'buy chairs and tables' },
    //{ id: '1212', title: 'landscaping', description: 'mow lawns around premises' }
  ],
  contractors: [
    //{ id: '12', name: 'abc ltd' },
    //{ id: '2212', name: 'abcdefgh ltd' }
  ],
  loading: false
}


export const AdminReducer = createReducer(
    initialState,
    //load project
    on(loadProjects,
      (state) => ({...state, status: 'loading'})
    )
)
