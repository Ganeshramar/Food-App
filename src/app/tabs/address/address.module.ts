import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressPageRoutingModule } from './address-routing.module';

import { AddressPage } from './address.page';
import { MapComponent } from 'src/app/comp/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddressPageRoutingModule
  ],
  declarations: [AddressPage, MapComponent]
})
export class AddressPageModule {}
