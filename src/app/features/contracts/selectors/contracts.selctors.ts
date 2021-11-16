import {
  createSelector,
  createFeatureSelector } from "@ngrx/store";
import { Contract } from '../models/contract.model';
import { ContractState } from "../reducers";

export const selectContractsState = createFeatureSelector<ContractState>('contracts');

const selectAllContracts = createSelector(
  selectContractsState,
  (state: ContractState) => state.contracts
)
