import { Component, Input } from '@angular/core';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';

@Component({
  selector: 'mc-tags-list',
  templateUrl: './tags-list.component.html'
})

export class TagsListComponent {
  @Input('tags') tagsProps: PopularTagType[]
}
