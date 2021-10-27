import { createAction, props } from "@ngrx/store";
import { User } from "./models/User.model";

export const signin = createAction(
  '[Auth] Signin',
  props<{user: User}>()
)

export const signout = createAction(
  ''
)
