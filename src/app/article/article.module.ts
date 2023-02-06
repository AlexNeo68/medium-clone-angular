import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMessageModule } from "src/app/shared/modules/error-message/error-message.module";
import { LoadingModule } from "src/app/shared/modules/loading/loading.module";
import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service";
import { ArticleComponent } from "./components/article/article.component";

import { GetArticleEffect } from "./store/effects/get-article.effect";
import { reducer } from "./store/reducers";

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('article', reducer), EffectsModule.forFeature([GetArticleEffect]), RouterModule.forChild(routes), LoadingModule, ErrorMessageModule],
  declarations: [
    ArticleComponent
  ],
  exports: [],
  providers: [SharedArticleService]
})

export class ArticleModule { }
