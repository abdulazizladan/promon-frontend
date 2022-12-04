import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProjectsService } from "../services/projects.service";
import { ProjectsState } from "./project.reducer";
import { createEffect } from '@ngrx/effects';

@Injectable()
export class ProjectsEffects {
  constructor(
    private store: Store<ProjectsState>,
    private ProjectsService: ProjectsService
  ){}

  //loadProjects$ = createEffect(() =>{})

}
