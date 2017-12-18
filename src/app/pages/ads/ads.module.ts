import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { CampaignsRoutingModule, routedComponents } from './ads-routing.module';
import { CampaignModule, campaignSubComponents } from './campaign/campaign.module';
import { CampaignsTableModule, campaignsTableSubComponents } from './campaigns-table/campaigns-table.module';
import { CampaignDataService } from '../../@core/data/campaign-data.service';

@NgModule({
  imports: [
    ThemeModule,
    CampaignsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ...campaignSubComponents,
    ...campaignsTableSubComponents,
  ],
  providers: [
    CampaignDataService,
  ],
  entryComponents: [...campaignsTableSubComponents]
})
export class CampaignsModule { }
