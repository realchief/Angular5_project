import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { CampaignsRoutingModule, routedComponents } from './campaigns-routing.module';
import { CampaignDataService } from '../../@core/data/campaign-data.service';

@NgModule({
  imports: [
    ThemeModule,
    CampaignsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    CampaignDataService,
  ],
})
export class CampaignsModule { }
