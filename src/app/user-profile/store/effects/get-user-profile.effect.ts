import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { UserProfileService } from "src/app/user-profile/services/user-profile.service";
import { GetUserProfileAction, GetUserProfileFailureAction, GetUserProfileSuccessAction } from "src/app/user-profile/store/actions/get-user-profile.action";
import { of } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import { Injectable } from "@angular/core";

@Injectable()
export class UserProfileEffect {
  constructor(private actions$: Actions, private userProfileService: UserProfileService) { }

  userProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetUserProfileAction),
      switchMap(({ username }) => {
        return this.userProfileService.getUserProfile(username).pipe(
          map((profile: ProfileInterface) => {
            return GetUserProfileSuccessAction({ profile });
          }),
          catchError(() => {
            return of(GetUserProfileFailureAction());
          })
        )
      })
    ))
}
