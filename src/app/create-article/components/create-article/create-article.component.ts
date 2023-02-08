import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface;

  constructor() {}

  ngOnInit(): void {
    this.initialValues = {
      title: 'Title of the form',
      body: 'Body of the form',
      description: 'Description of the form',
      tagList: ['tag 1', 'tag 2'],
    };
  }

  onArticleSubmit(formValues: any): void {
    console.log(formValues);
  }
}
