import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FeedModule } from "src/app/shared/modules/feed/feed.module";

import { LoadingModule } from "src/app/shared/modules/loading/loading.module";
import { UserProfileService } from "src/app/user-profile/services/user-profile.service";
import { UserProfileEffect } from "src/app/user-profile/store/effects/get-user-profile.effect";
import { reducer } from "src/app/user-profile/store/reducers";
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'profiles/:username',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:username/favorites',
    component: UserProfileComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('userProfile', reducer),
    EffectsModule.forFeature([UserProfileEffect]),
    LoadingModule,
    FeedModule
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [UserProfileService]
})

export class UserProfileModule { }
