import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserFollowComponent } from './components/user-follow/user-follow.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UserFollowComponent
  ],
  exports: [UserFollowComponent]

})

export class UserFollowModule {

}
