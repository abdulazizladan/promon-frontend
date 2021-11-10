import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { Contract } from '../models/contract.model';

export const contractsFeatureKey = 'contracts';

export interface contractState {
  contracts: Contract[]
}

export const initialContractState: contractState = {
  contracts: []
}

export const contractReducers = createReducer({})
