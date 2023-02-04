import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { PopularTagType } from "src/app/shared/types/popular-tag.type";
import { environment } from "src/environments/environment";
import { GetPopularTagsResponseInterface } from "../types/get-popular-tags-response.interface";

@Injectable()

export class TagsPopularService {

  constructor(private httpClient: HttpClient) { }

  getPopularTags(): Observable<PopularTagType[]> {
    const fullUrl = environment.apiUrl + '/tags';
    return this.httpClient.get(fullUrl).pipe(
      map((response: GetPopularTagsResponseInterface) => response.tags)
    );
  }
}
