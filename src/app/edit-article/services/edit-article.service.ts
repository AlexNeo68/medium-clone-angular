import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { ArticleSaveResponseInterface } from 'src/app/shared/types/article-save-response.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class EditArticleService {
  constructor(private httpClient: HttpClient) {}

  editArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullApiUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.httpClient
      .put<ArticleSaveResponseInterface>(fullApiUrl, { article: articleInput })
      .pipe(map((response: ArticleSaveResponseInterface) => response.article));
  }
}
