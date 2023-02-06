import { ArticleStateInterface } from 'src/app/article/types/article-state.interface';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feed-state.interface';
import { TagsPopularStateInterface } from '../modules/tags-popular/types/tags-popular-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: TagsPopularStateInterface
  article: ArticleStateInterface
}
