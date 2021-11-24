import { createAction, props } from "@ngrx/store";
import { Supervisor } from "../models/supervisor.model";

const loadSupervisors = createAction(
  '[Supervisor] Load Supervisors'
)

const loadSingleSupervisor = createAction(
  '[Supervisor] Load Single Supervisor',
  props<{supervisor: Supervisor}>()
)

const addSupervisor = createAction(
  '[Supervisor] Create Supervisor',
  props<{supervisor: Supervisor}>()
)

const updateSupervisor = createAction(
  '[Supervisor] Create Supervisor',
  props<{supervisor: Supervisor}>()
)

const removeSupervisor = createAction(
  '[Supervisor] Create Supervisor',
  props<{supervisor: Supervisor}>()
)


