import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns.component';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';

const routes: Routes = [{
  path: '',
  component: CampaignsComponent,
  children: [{
    path: 'create',
    component: NewCampaignComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignsRoutingModule { }

export const routedComponents = [
  CampaignsComponent,
  NewCampaignComponent,
];
