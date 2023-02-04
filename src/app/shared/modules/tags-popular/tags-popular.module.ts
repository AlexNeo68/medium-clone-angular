import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMessageModule } from "../error-message/error-message.module";
import { LoadingModule } from "../loading/loading.module";
import { TagsPopularComponent } from './components/tags-popular/tags-popular.component';
import { TagsPopularService } from "./services/tags-popular.service";
import { GetTagsPopularEffect } from "./store/effects/get-tags.effect";
import { reducer } from "./store/reducers";

@NgModule({
  imports: [
    CommonModule,
    ErrorMessageModule,
    RouterModule,
    LoadingModule,
    StoreModule.forFeature('popularTags', reducer),
    EffectsModule.forFeature([GetTagsPopularEffect])
  ],
  declarations: [
    TagsPopularComponent
  ],
  exports: [TagsPopularComponent],
  providers: [TagsPopularService]
})

export class TagsPopularModule {

}
