import { ArticleStateInterface } from 'src/app/article/types/article-state.interface';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { CreateArticleStateInterface } from 'src/app/create-article/types/create-article-state.interface';
import { EditArticleStateInterface } from 'src/app/edit-article/types/edit-article-state.interface';
import { FeedStateInterface } from '../modules/feed/types/feed-state.interface';
import { TagsPopularStateInterface } from '../modules/tags-popular/types/tags-popular-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: TagsPopularStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
}
