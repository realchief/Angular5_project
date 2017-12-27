import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { AdminUserFormComponent } from './form/admin-user-form.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdminUserFormComponent,
  ],
})
export class AdminUsersModule { }
