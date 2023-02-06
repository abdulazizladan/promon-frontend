import { createReducer } from "@ngrx/store"

export class Ticket{
  "id": string;
  "title": string;
}

export class SupportState{
  "tickets": Ticket[];
  "loading": boolean;
}

export const initialState: SupportState = {
  tickets: [],
  loading: false
}

export const supportStateKey: string = "support";

export const supportReducer = createReducer(
  initialState
);
