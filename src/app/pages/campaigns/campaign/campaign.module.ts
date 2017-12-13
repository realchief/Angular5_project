import { NgModule } from '@angular/core';

import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { AttachSiteListsComponent } from './attach-site-lists/attach-site-lists.component';
import { AdSetsComponent } from './ad-sets/ad-sets.component';

@NgModule({
  declarations: [
    CampaignFormComponent,
    AttachSiteListsComponent,
    AdSetsComponent,
  ],
})
export class CampaignModule { }

export const campaignSubComponents = [
  CampaignFormComponent,
  AttachSiteListsComponent,
  AdSetsComponent,
];
