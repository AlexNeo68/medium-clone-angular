import { Component, Input } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {
  @Input('inputValues') inputValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmitingProps: boolean
  @Input('errors') errorsProps: BackendErrorInterface | null
}
