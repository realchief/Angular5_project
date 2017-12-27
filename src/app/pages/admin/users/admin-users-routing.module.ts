import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUsersComponent } from './admin-users.component';
import { AdminUserFormComponent } from './form/admin-user-form.component';

const routes: Routes = [{
  path: '',
  component: AdminUsersComponent,
  children: [{
    path: 'create',
    component: AdminUserFormComponent,
  }, {
    path: 'edit',
    component: AdminUserFormComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUsersRoutingModule {}
