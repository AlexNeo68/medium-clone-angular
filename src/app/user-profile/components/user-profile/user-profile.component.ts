import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { GetUserProfileAction } from 'src/app/user-profile/store/actions/get-user-profile.action';
import { errorUserProfileSelector, isLoadingUserProfileSelector, userProfileSelector } from 'src/app/user-profile/store/selectors';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit, OnDestroy {

  userProfile: ProfileInterface
  userProfileSubscription: Subscription

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isCurrentUserProfile$: Observable<boolean>

  username: string;
  isFavorited: boolean;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListener();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

  initializeValues(): void {

    this.username = this.route.snapshot.paramMap.get('username');

    this.isLoading$ = this.store.pipe(select(isLoadingUserProfileSelector))
    this.error$ = this.store.pipe(select(errorUserProfileSelector))

    this.isCurrentUserProfile$ = combineLatest(this.store.pipe(select(currentUserSelector), filter(Boolean)), this.store.pipe(select(userProfileSelector), filter(Boolean)))
      .pipe(map(([currentUser, userProfile]: [CurrentUserInterface, ProfileInterface]) => {
        return currentUser.username === userProfile.username;
      }))
  }

  initializeListener(): void {
    this.userProfileSubscription = this.store.pipe(select(userProfileSelector)).subscribe((userProfile: ProfileInterface) => {
      this.userProfile = userProfile;
    })

    this.route.params.subscribe((params: Params) => {
      this.username = params['username'];
      this.getUserProfile()
    });
  }

  getFeedUrl(): string {
    this.isFavorited = this.router.url.includes('favorites');

    return this.isFavorited
      ? `/articles?favorited=${this.username}`
      : `/articles?author=${this.username}`;
  }

  getUserProfile(): void {
    this.store.dispatch(GetUserProfileAction({ username: this.username }))
  }
}
