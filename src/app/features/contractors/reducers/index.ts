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
  contractors: Contractor[],
  loading: boolean
}

export const initialContractorsState: ContractorState = {
  contractors: [],
  loading: false
}

export const contractorsReducers = createReducer(
  initialContractorsState,
  on(loadContractors, (state) =>
    ({...state, loading: true})
  ),
  //on(loadSingleContractor, (satte))
)
