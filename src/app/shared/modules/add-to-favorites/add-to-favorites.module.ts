import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoriteService } from 'src/app/shared/modules/add-to-favorites/services/add-to-favorites.service';
import { AddToFavoritesEffect } from 'src/app/shared/modules/add-to-favorites/store/effects/add-to-favorites.effect';
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoriteService],
})
export class AddToFavoritesModule {}
