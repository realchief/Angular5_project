import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminTabModule } from './tab/admin-tab.module';
import { AdminAdvertisersModule } from './advertisers/admin-advertisers.module';
import { AdminAdvertisersRoutingModule } from './advertisers/admin-advertisers-routing.module';
import { AdminUsersModule } from './users/admin-users.module';
import { AdminUsersRoutingModule } from './users/admin-users-routing.module';
import { AdminDataService } from '../../@core/data/admin-data.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    AdminRoutingModule,
    AdminTabModule,
    AdminAdvertisersModule,
    AdminAdvertisersRoutingModule,
    AdminUsersModule,
    AdminUsersRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    AdminDataService,
  ],
  entryComponents: []
})
export class AdminModule { }
