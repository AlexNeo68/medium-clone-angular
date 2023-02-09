import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';


import { GetArticleEffect } from 'src/app/edit-article/store/effects/get-article.effect';
import { EditArticleService } from 'src/app/edit-article/services/edit-article.service';
import { EditArticleEffect } from 'src/app/edit-article/store/effects/edit-article.effect';
import { EditArticleComponent } from 'src/app/edit-article/components/create-article/edit-article.component';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { reducer } from 'src/app/edit-article/store/reducers';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([GetArticleEffect, EditArticleEffect]),
    StoreModule.forFeature('editArticle', reducer),
    LoadingModule
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService],
})
export class EditArticleModule { }
