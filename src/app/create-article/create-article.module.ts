import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleFormModule } from "../shared/modules/article-form/article-form.module";
import { ArticleFormComponent } from "../shared/modules/article-form/components/article-form/article-form.component";
import { CreateArticleComponent } from './components/create-article/create-article.component';


const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  declarations: [
    CreateArticleComponent
  ]
})

export class CreateArticleModule { }
