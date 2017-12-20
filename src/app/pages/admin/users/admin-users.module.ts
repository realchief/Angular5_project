import { NgModule } from '@angular/core';

import { AdminUsersListComponent } from './list/admin-users-list.component';
import { AdminUserEditComponent } from './edit/admin-user-edit.component';

@NgModule({
  declarations: [
    AdminUsersListComponent,  
    AdminUserEditComponent
  ],
})
export class AdminUserModule { }

export const adminUserSubComponents = [
  AdminUsersListComponent,
  AdminUserEditComponent
];
