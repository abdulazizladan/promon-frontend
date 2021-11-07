import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { initialProjectsState } from '../../projects/reducers';
import { Contractor } from '../models/contractor.model';

export const contractorsFeatureKey = 'contractors';

export interface ContractorState {
  contractors: Contractor[]
}

export const initialContractorsState: ContractorState = {
  contractors: []
}

export const contractorsReducers = createReducer(
  initialProjectsState
)
