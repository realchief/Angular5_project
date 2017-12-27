import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { AdminAdvertiserFormComponent } from './form/admin-advertiser-form.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdminAdvertiserFormComponent,
  ],
})
export class AdminAdvertisersModule { }
