import { createAction, props } from "@ngrx/store";
import { Contract } from "../models/contract.model";

export const loadContracts = createAction(
  '[Contract] Load Contracts'
)

export const loadSingleContract = createAction(
  '[Contract] Load Single Contract'
)

export const addContract = createAction(
  '[Contract] Create Contract',
  props<{contract: Contract}>()
)

export const updateContract = createAction(
  '[Contract] Update Contract',
  props<{contract: Contract}>()
)


export const deleteContracr = createAction(
  '[Contract] Delete Contract',
  props<{contract: Contract}>()
)
