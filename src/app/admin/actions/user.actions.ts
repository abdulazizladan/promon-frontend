import { createAction, props } from "@ngrx/store";
import { User } from '../models/user.model'


export const loadUsers = createAction(
    '[User] Load Users'
);
export const AddUser = createAction(
    '[Project] Add User',
    props<{user: User}>()
);
export const removeUser = createAction(
    '[User] Remove User',
    props<{id: string}>()
);