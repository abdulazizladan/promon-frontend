import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProjectsService } from './services/projects.service';

@Injectable()
export class ProjectEffects {

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Projects] load projects'),
      mergeMap(() => this.projectsService.findAll()
      .pipe(
        map(projects => ({ type: '[Projects API] Projects Load Success', payload: projects})),
        catchError(() => of({ type: '[Projects API] Projects Load Error' }))
      ))
    )
  )

  loadSingleProject$ = createEffect(() =>
    this.actions$.pipe(

    )
  )

  constructor(private actions$: Actions,
  private projectsService: ProjectsService){

  }

}
