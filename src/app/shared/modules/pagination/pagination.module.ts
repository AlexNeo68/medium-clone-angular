import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UtilsService } from "../../services/utils.service";
import { PaginationComponent } from "./components/pagination/pagination.component";

@NgModule({
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilsService],
  imports: [RouterModule, CommonModule]
})

export class PaginationModule { }
