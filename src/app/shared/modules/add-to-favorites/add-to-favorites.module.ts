import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddToFavoriteService } from "src/app/shared/modules/add-to-favorites/services/add-to-favorites.service";
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AddToFavoritesComponent
  ],
  exports: [
    AddToFavoritesComponent
  ],
  providers: [AddToFavoriteService]
})

export class AddToFavoritesModule { }
