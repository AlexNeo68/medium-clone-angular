import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { GetArticleResponseInterface } from "src/app/shared/types/get-article-response.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class AddToFavoriteService {

  constructor(private http: HttpClient) { }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article
  }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http.post(url, {}).pipe(map(this.getArticle));
  }

  removeFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http.delete(url, {}).pipe(map(this.getArticle));
  }
}
