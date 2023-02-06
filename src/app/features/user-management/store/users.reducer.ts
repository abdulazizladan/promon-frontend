import { createReducer } from "@ngrx/store"

export class User{
  "email": string;
}

export class UserState{
  "users": User[];
  "loading": boolean;
}

export const initialState: UserState = {
  users: [],
  loading: false
}

export const usersStateKey = "users";

export const UsersReducer = createReducer(
  initialState
)
