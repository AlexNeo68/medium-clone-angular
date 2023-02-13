import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CommentInputInterface } from "src/app/shared/modules/comments/types/comment-input.interface";
import { CommentSaveResponseInterface } from "src/app/shared/modules/comments/types/comment-save-response.interface";
import { CommentInterface } from "src/app/shared/modules/comments/types/comment.interface";
import { CommentsGetResponseInterface } from "src/app/shared/modules/comments/types/comments-get-response.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class CommentsService {

  getApiUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/comments`;
  }

  constructor(private http: HttpClient) { }

  saveComment(slug: string, commentInput: CommentInputInterface): Observable<CommentInterface> {
    const apiUrl = this.getApiUrl(slug);
    return this.http.post<CommentSaveResponseInterface>(apiUrl, { comment: commentInput }).pipe(map((response: CommentSaveResponseInterface) => response.comment));
  }

  getComments(slug: string): Observable<CommentInterface[]> {
    const apiUrl = this.getApiUrl(slug);
    return this.http.get<CommentsGetResponseInterface>(apiUrl).pipe(map((response: CommentsGetResponseInterface) => response.comments));
  }
}
