import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { initialProjectsState } from '../../projects/reducers';
import { loadContractors } from '../actions/contractor.actions';
import { Contractor } from '../models/contractor.model';

export const contractorsFeatureKey = 'contractors';

export interface ContractorState {
  contractors: Contractor[]
}

export const initialContractorsState: ContractorState = {
  contractors: []
}

export const contractorsReducers = createReducer(
  initialProjectsState,
  on(loadContractors, (state) =>
    ({...state, loading: true})
  )
)
