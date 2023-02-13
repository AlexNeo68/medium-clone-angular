import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BackendErrorMessagesModule } from "src/app/shared/modules/backendErrorMessages/backendErrorMessages.module";
import { CommentFormComponent } from "src/app/shared/modules/comments/components/comment-form/comment-form.component";
import { CommentListComponent } from "src/app/shared/modules/comments/components/comment-list/comment-list.component";
import { CommentsComponent } from "src/app/shared/modules/comments/components/comments/comments.component";
import { CommentsService } from "src/app/shared/modules/comments/services/comments.service";
import { CommentSaveEffect } from "src/app/shared/modules/comments/store/effects/comment-save.effect";
import { CommentsGetEffect } from "src/app/shared/modules/comments/store/effects/comments-get.effiect";
import { reducer } from "src/app/shared/modules/comments/store/reducers";


const components = [
  CommentsComponent,
  CommentFormComponent,
  CommentListComponent
]

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('comments', reducer),
    EffectsModule.forFeature([CommentSaveEffect, CommentsGetEffect]),
    BackendErrorMessagesModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: components,
  exports: components,
  providers: [CommentsService]
})

export class CommentsModule { }
