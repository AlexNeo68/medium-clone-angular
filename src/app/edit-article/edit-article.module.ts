import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ArticleFormModule } from "../shared/modules/article-form/article-form.module";
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CreateArticleEffect } from "./store/effects/create-article.effect";
import { reducer } from 'src/app/create-article/store/reducers'
import { CreateArticleService, EditArticleService } from "./services/edit-article.service";

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule, EffectsModule.forFeature([CreateArticleEffect]), StoreModule.forFeature('createArticle', reducer)],
  declarations: [
    CreateArticleComponent
  ],
  providers: [EditArticleService]
})

export class EditArticleModule { }
