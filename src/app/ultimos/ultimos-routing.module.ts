import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltimosPage } from './ultimos.page';

const routes: Routes = [
  {
    path: '',
    component: UltimosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltimosPageRoutingModule {}
