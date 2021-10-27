import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { signin, signout } from './auth.actions';
import { User } from './models/User.model';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthEffects {

  constructor
  (private actions$: Actions,
  private authService: AuthService) {

  }

  //signin$ = createEffect(() => this.actions$.pipe(
  //  ofType(signin),
  //  exhaustMap(action =>
  //    this.authService.signin(user).pipe(
  //      map(user => signin({ user:  })),
  //      catchError(error => of(AuthApiActions.loginFailure({ error })))
  //    ))
  //))

}
