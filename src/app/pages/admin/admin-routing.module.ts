import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminTabComponent } from './tab/admin-tab.component';
import { AdminAdvertisersComponent } from './advertisers/admin-advertisers.component';
import { AdminUsersComponent } from './users/admin-users.component';
import { AdminPaymentsComponent } from './payments/admin-payments.component';
import { AdminAdvertisersListComponent } from './advertisers/list/admin-advertisers-list.component';
import { AdminUsersListComponent } from './users/list/admin-users-list.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'tab',
    component: AdminTabComponent,
  }, {
    path: 'advertisers',
    loadChildren: './advertisers/admin-advertisers.module#AdminAdvertisersModule',
  }, {
    path: 'users',
    loadChildren: './users/admin-users.module#AdminUsersModule',
  }, {
    path: 'payments',
    component: AdminPaymentsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  AdminTabComponent,
  AdminAdvertisersComponent,
  AdminUsersComponent,
  AdminPaymentsComponent,
  AdminAdvertisersListComponent,
  AdminUsersListComponent,
];
