import { createAction, props } from "@ngrx/store";
import { Contractor } from '../models/contractor.model';

export const loadContractors = createAction(
    '[Contractor] Load Contractors'
);
export const AddContractor = createAction(
    '[Contractor] Add Contractor',
    props<{contractor: Contractor}>()
);
export const removeContractor = createAction(
    '[Contractor] Remove Contractor',
    props<{id: string}>()
);