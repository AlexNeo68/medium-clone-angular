import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input('articleSlug') articleSlugProps: string;
}
