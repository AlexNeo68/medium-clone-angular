import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistence.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { getCurrentUserAction, GetCurrentUserFailureAction, getCurrentUserSuccessAction } from '../actions/getCurrentUser.action';


@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
  ) { }
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');

        console.log(token);

        if (!token) {
          return of(GetCurrentUserFailureAction())
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(
              GetCurrentUserFailureAction()
            );
          })
        );
      })
    )
  );

}
