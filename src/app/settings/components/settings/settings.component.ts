import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, Observable, Subscription } from 'rxjs';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import { updateCurrentUserAction } from 'src/app/auth/store/actions/update-current-user.action';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { isSubmittingSettingsSelector, validationErrorsSettingsSelector } from 'src/app/settings/store/selectors';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { CurrentUserInputInterface } from 'src/app/shared/types/currentUserInput.interface';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  currentUser: CurrentUserInterface
  currentUserSubscription: Subscription
  form: FormGroup

  isSubmitting$: Observable<boolean>
  validationErrors$: Observable<BackendErrorInterface | null>

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeListener()
    this.initializeValues()
  }
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe()
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSettingsSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSettingsSelector));
  }

  initializeListener() {
    this.currentUserSubscription = this.store.pipe(select(currentUserSelector), filter(Boolean)).subscribe((currentUser: CurrentUserInterface) => {
      this.currentUser = currentUser;
      this.initializeForm()
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      image: this.currentUser.image,
      email: this.currentUser.email,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      password: '',
    });
  }

  onSubmit() {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value
    }
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }))
  }

  onLogout() {
    this.store.dispatch(logoutAction())
  }
}
