import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';

import { reducer } from 'src/app/create-article/store/reducers';

import { GetArticleEffect } from 'src/app/edit-article/store/effects/get-article.effect';
import { EditArticleService } from 'src/app/edit-article/services/edit-article.service';
import { EditArticleEffect } from 'src/app/edit-article/store/effects/edit-article.effect';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([GetArticleEffect, EditArticleEffect]),
    StoreModule.forFeature('createArticle', reducer),
  ],
  declarations: [CreateArticleComponent],
  providers: [EditArticleService],
})
export class EditArticleModule {}
