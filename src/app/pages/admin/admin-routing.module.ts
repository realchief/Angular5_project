import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminAdvertisersComponent } from './advertisers/admin-advertisers.component';
import { AdminUsersComponent } from './users/admin-users.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'advertisers',
    component: AdminAdvertisersComponent,
  }, {
    path: 'users',
    component: AdminUsersComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  AdminAdvertisersComponent,
  AdminUsersComponent,
];
