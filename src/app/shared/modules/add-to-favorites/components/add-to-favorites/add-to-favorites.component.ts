import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToFavoriteAction } from 'src/app/shared/modules/add-to-favorites/store/actions/add-to-favorites.action';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

  constructor(private store: Store) {

  }

  @Input('articleSlug') articleSlugProps: string;
  @Input('favoritesCount') favoritesCountProps: number;
  @Input('isFavorited') isFavoritedProps: boolean;

  favoritesCount: number;
  isFavorited: boolean;

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  onHandleLike() {
    this.store.dispatch(AddToFavoriteAction({ isFavorited: this.isFavorited, slug: this.articleSlugProps }))
    if (this.isFavorited) {
      this.favoritesCount--;
    } else {
      this.favoritesCount++;
    }
    this.isFavorited = !this.isFavorited;
  }
}
