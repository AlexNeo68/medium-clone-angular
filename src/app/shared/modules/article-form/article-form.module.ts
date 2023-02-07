import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticleFormComponent } from "./components/article-form/article-form.component";


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ArticleFormComponent
  ],
  exports: [ArticleFormComponent]
})

export class ArticleFormModule { }
