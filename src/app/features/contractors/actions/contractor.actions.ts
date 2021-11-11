import { createAction, props } from "@ngrx/store";
import { Contractor } from '../models/contractor.model';

export const loadContractors = createAction(
    '[Contractor] Load Contractors'
);

export const loadSingleContrctor = createAction(
  '[Contractor] Load Contractor',
  props<{id: string}>()
);

export const addContractor = createAction(
    '[Contractor] Add Contractor',
    props<{contractor: Contractor}>()
);

export const updateContractor = createAction(
  '[Contractor] Update Contractor',
  props<{contractor: Contractor}>()
)

export const deleteContractor = createAction(
    '[Contractor] Remove Contractor',
    props<{contractor: Contractor}>()
);
