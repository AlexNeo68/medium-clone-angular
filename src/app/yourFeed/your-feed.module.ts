import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BannerModule } from "../shared/modules/banner/banner.module";
import { FeedTogglerModule } from "../shared/modules/feed-toggler/feed-toggler.module";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { TagsPopularModule } from "../shared/modules/tags-popular/tags-popular.module";
import { YourFeedComponent } from "./components/your-feed/your-feed.component";

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule, TagsPopularModule, FeedTogglerModule],
  declarations: [
    YourFeedComponent
  ]
})

export class YourFeedModule { }
