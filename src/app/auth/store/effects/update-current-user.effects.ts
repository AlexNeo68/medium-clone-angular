import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { updateCurrentUserAction, updateCurrentUserSuccessAction } from 'src/app/auth/store/actions/update-current-user.action';
import { PersistanceService } from 'src/app/shared/services/persistence.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { loginAction, loginSuccessAction, loginFailureAction } from '../actions/login.action';


@Injectable()
export class UpdateCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService.updateUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

}
