import { createAction, props } from "@ngrx/store";
import { Contractor } from "../../models/contractor.model";

export const loadContractors = createAction(
  '[Contralctors] Load Contractors'
)
