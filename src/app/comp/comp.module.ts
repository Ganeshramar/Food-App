import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadRestaurantComponent } from './load-restaurant/load-restaurant.component';
import { ScreenEmptyComponent } from './screen-empty/screen-empty.component';



@NgModule({
  declarations: [
    RestaurantComponent,
    LoadRestaurantComponent,
    ScreenEmptyComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RestaurantComponent,
    LoadRestaurantComponent,
    ScreenEmptyComponent
  ]
})
export class CompModule { }
