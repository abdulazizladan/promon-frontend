import { createReducer } from "@ngrx/store";
import { Contractor } from "../models/contractor.model";

export const featureKey = 'contractors';

export interface ContractorsState {
  contractors: Contractor[],
  error: string,
  status: 'pending' | 'loading' | 'error' | 'success'
}

export const initialState: ContractorsState = {
  contractors: [],
  error: '',
  status: 'pending'
}

export const ContractorsReducer = createReducer(
  initialState
)
