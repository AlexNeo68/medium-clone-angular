import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userFollowingAction } from 'src/app/shared/modules/user-follow/store/actions/user-following.action';

@Component({
  selector: 'mc-user-follow',
  templateUrl: './user-follow.component.html',
  styleUrls: ['./user-follow.component.scss']
})
export class UserFollowComponent implements OnInit {

  @Input('username') usernameProps: string
  @Input('isFollowing') isFollowingProps: boolean

  constructor(private store: Store) { }

  isFollowing: boolean;

  ngOnInit(): void {
    this.isFollowing = this.isFollowingProps;
  }

  toggleFollow(): void {
    this.store.dispatch(userFollowingAction({ isFollowing: this.isFollowing, username: this.usernameProps }))
    this.isFollowing = !this.isFollowing
  }
}
