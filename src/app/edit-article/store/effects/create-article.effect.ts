import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { CreateArticleService } from '../../services/edit-article.service';
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from '../actions/create-article.action';




@Injectable()
export class CreateArticleEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private createArticleService: CreateArticleService
  ) { }
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );
  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    {
      dispatch: false,
    }
  );
}
