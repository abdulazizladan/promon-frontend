import { createAction, props } from "@ngrx/store"
import { LoginCredentials } from "../models/credentials.model"

export const login = createAction('[Auth] Login', props<{ loginCredentials: LoginCredentials }>)
