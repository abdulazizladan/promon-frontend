import { createAction, props } from "@ngrx/store";
import { Ticket } from "./support.reducer";

export const loadTickets = createAction('[Tickets] Load Tickets');

export const addComment = createAction('[Tickets] Add Comment', props<{ticket: Ticket}>);

export const removeComment = createAction('[Tickets] Remove Content', props<{id: string}>)
