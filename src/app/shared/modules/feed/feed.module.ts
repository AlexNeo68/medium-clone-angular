import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AddToFavoritesModule } from "src/app/shared/modules/add-to-favorites/add-to-favorites.module";
import { ErrorMessageModule } from "../error-message/error-message.module";
import { LoadingModule } from "../loading/loading.module";
import { PaginationModule } from "../pagination/pagination.module";
import { TagsListModule } from "../tags-list/tags-list.module";
import { FeedComponent } from './components/global-feed/feed.component';
import { FeedService } from "./services/feed.service";
import { GetFeedEffect } from "./store/effects/get-feed.effect";
import { reducer } from "./store/reducers";

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('feed', reducer), EffectsModule.forFeature([GetFeedEffect]), RouterModule, LoadingModule, ErrorMessageModule, PaginationModule, TagsListModule, AddToFavoritesModule],
  declarations: [
    FeedComponent
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})

export class FeedModule { }
