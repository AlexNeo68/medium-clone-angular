import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { userFollowingAction, userFollowingFailureAction, userFollowingSuccessAction } from "src/app/shared/modules/user-follow/store/actions/user-following.action";
import { UserFollowingService } from "src/app/shared/modules/user-follow/services/user-follow.servie";
import { ProfileInterface } from "src/app/shared/types/profile.interface";

@Injectable()

export class UserFollowingEffect {
  constructor(private actions$: Actions, private userFollowingService: UserFollowingService) { }

  userFollowingEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userFollowingAction),
      switchMap(({ isFollowing, username }) => {
        const following$ = isFollowing
          ? this.userFollowingService.unFollowing(username)
          : this.userFollowingService.following(username);
        return following$.pipe(
          map((profile: ProfileInterface) => userFollowingSuccessAction({ profile })),
          catchError(() => of(userFollowingFailureAction()))
        )
      })
    );
  });
}
