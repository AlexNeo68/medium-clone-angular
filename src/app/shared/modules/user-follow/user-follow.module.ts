import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { UserFollowingEffect } from "src/app/shared/modules/user-follow/store/effects/user-following.effect";
import { UserFollowingService } from "src/app/shared/modules/user-follow/services/user-follow.servie";
import { UserFollowComponent } from './components/user-follow/user-follow.component';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([UserFollowingEffect])],
  declarations: [UserFollowComponent],
  exports: [UserFollowComponent],
  providers: [UserFollowingService]
})

export class UserFollowModule { }
