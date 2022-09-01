import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyComponent } from 'qiankun-ng-common';

const routes: Routes = [
  {
    path: '**',
    component: EmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
