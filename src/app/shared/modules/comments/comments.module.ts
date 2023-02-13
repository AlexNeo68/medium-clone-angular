import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommentFormComponent } from "src/app/shared/modules/comments/components/comment-form/comment-form.component";
import { CommentListComponent } from "src/app/shared/modules/comments/components/comment-list/comment-list.component";
import { CommentsComponent } from "src/app/shared/modules/comments/components/comments/comments.component";


const components = [
  CommentsComponent,
  CommentFormComponent,
  CommentListComponent
]

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components
})

export class CommentsModule { }
