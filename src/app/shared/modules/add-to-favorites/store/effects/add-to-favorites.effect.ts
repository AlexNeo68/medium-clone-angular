import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AddToFavoriteService } from 'src/app/shared/modules/add-to-favorites/services/add-to-favorites.service';
import {
  AddToFavoriteAction,
  AddToFavoriteFailureAction,
  AddToFavoriteSuccessAction,
} from 'src/app/shared/modules/add-to-favorites/store/actions/add-to-favorites.action';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable()
export class AddToFavoritesEffect {
  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoriteService
  ) {}

  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddToFavoriteAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.removeFavorite(slug)
          : this.addToFavoritesService.addToFavorites(slug);

        return article$.pipe(
          map((article: ArticleInterface) => {
            return AddToFavoriteSuccessAction({ article });
          }),
          catchError(() => {
            return of(AddToFavoriteFailureAction());
          })
        );
      })
    )
  );
}
