import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { reducer } from 'src/app/auth/store/reducers';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../shared/services/persistence.service';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { AuthService } from './services/auth.service';
import { LoginEffect } from './store/effects/login.effects';
import { RegisterEffect } from './store/effects/register.effects';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule { }
