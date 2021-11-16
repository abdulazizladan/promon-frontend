import {
  createSelector,
  createFeatureSelector } from "@ngrx/store";
import { Contractor } from "../models/contractor.model";
import { ContractorState } from "../reducers";

export const selectContractorsState = createFeatureSelector<ContractorState>('contractors')

const selectAllContractors = createSelector(
  selectContractorsState,
  (state: ContractorState) => state.contractors
)
