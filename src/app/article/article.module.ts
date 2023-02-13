import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CommentsModule } from "src/app/shared/modules/comments/comments.module";
import { ErrorMessageModule } from "src/app/shared/modules/error-message/error-message.module";
import { LoadingModule } from "src/app/shared/modules/loading/loading.module";
import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service";
import { TagsListModule } from "../shared/modules/tags-list/tags-list.module";
import { ArticleComponent } from "./components/article/article.component";
import { ArticleService } from "./services/article.service";
import { DeleteArticleEffect } from "./store/effects/delete-article.effect";

import { GetArticleEffect } from "./store/effects/get-article.effect";
import { reducer } from "./store/reducers";

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('article', reducer), EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]), RouterModule.forChild(routes), LoadingModule, ErrorMessageModule, TagsListModule, CommentsModule],
  declarations: [
    ArticleComponent
  ],
  exports: [],
  providers: [SharedArticleService, ArticleService]
})

export class ArticleModule { }
