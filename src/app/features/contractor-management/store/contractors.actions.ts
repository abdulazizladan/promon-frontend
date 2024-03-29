import { createAction, props } from "@ngrx/store";
import { Contractor } from "../models/contractor.model";

export const addContractor = createAction('[CONTRACTORS] Add Contractor', props<{ contractor: Contractor }>());

export const removeContractor = createAction('[CONTRACTORS] Remove Contractor', props<{ id: string }>())

export const loadContractors = createAction('[CONTRACTORS] Load Contractors');

export const loadDetails = createAction('[CONTRACTORS] Load Contractor details', props<{ id: string }>())

export const loadContractorsSuccess = createAction('[CONTRACTORS] Load Contractors Success');

export const loadContractorsFailure = createAction('[CONTRACTORS] Load Contractors Failure');
