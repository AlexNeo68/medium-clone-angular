import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { reducer } from "src/app/settings/store/reducer";
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducer)
  ],
  declarations: [
    SettingsComponent
  ]
})

export class SettingsModule { }
