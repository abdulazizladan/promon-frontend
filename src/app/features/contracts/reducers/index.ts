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
import { loadContracts } from '../actions/contracts.actions';
import { Contract } from '../models/contract.model';

export const contractsFeatureKey = 'contracts';

export interface ContractState {
  contracts: Contract[]
}

export const initialContractState: ContractState = {
  contracts: []
}

export const contractReducers = createReducer(
  initialContractState,
  on(loadContracts, (state) =>
    ({...state, loading: true})
  )
)
