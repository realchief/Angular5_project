import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAdvertisersComponent } from './admin-advertisers.component';
import { AdminAdvertiserFormComponent } from './form/admin-advertiser-form.component';

const routes: Routes = [{
  path: '',
  component: AdminAdvertisersComponent,
  children: [{
    path: 'edit',
    component: AdminAdvertiserFormComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAdvertisersRoutingModule {}
