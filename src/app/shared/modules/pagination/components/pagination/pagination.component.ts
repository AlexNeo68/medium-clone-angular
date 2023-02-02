import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('baseUrl') baseUrlProps: string;
  @Input('limit') limitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('total') totalProps: number;

  pages: number[]
  countPages: number

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.countPages = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.countPages);
  }
}
