import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CommentInputInterface } from "src/app/shared/modules/comments/types/comment-input.interface";
import { CommentSaveResponseInterface } from "src/app/shared/modules/comments/types/comment-save-response.interface";
import { CommentInterface } from "src/app/shared/modules/comments/types/comment.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  saveComment(slug: string, commentInput: CommentInputInterface): Observable<CommentInterface> {
    const apiUrl = `${environment.apiUrl}/articles/${slug}/comments`;
    return this.http.post<CommentSaveResponseInterface>(apiUrl, { comment: commentInput }).pipe(map((response: CommentSaveResponseInterface) => response.comment));
  }
}
