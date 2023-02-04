import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorMessageModule } from "../error-message/error-message.module";
import { LoadingModule } from "../loading/loading.module";
import { TagsPopularComponent } from './components/tags-popular/tags-popular.component';

@NgModule({
  imports: [CommonModule, ErrorMessageModule, RouterModule, LoadingModule],
  declarations: [
    TagsPopularComponent
  ],
  exports: [TagsPopularComponent]
})

export class TagsPopularModule {

}
