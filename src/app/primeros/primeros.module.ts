import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimerosPageRoutingModule } from './primeros-routing.module';

import { PrimerosPage } from './primeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimerosPageRoutingModule
  ],
  declarations: [PrimerosPage]
})
export class PrimerosPageModule {}
