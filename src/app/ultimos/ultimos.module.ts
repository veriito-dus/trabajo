import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltimosPageRoutingModule } from './ultimos-routing.module';

import { UltimosPage } from './ultimos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltimosPageRoutingModule
  ],
  declarations: [UltimosPage]
})
export class UltimosPageModule {}
