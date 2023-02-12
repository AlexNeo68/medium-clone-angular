import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-user-follow',
  templateUrl: './user-follow.component.html',
  styleUrls: ['./user-follow.component.scss']
})
export class UserFollowComponent implements OnInit {

  @Input('username') usernameProps: string
  @Input('isFollowing') isFollowingProps: boolean

  isFollowing: boolean;

  ngOnInit(): void {
    this.isFollowing = this.isFollowingProps;
  }

  toggleFollow(): void {
    this.isFollowing = !this.isFollowing
  }
}
