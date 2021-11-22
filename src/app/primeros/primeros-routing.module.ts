import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimerosPage } from './primeros.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimerosPageRoutingModule {}
