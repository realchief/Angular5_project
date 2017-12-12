import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns.component';
import { CampaignsTableComponent } from './campaigns-table/campaigns-table.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';

const routes: Routes = [{
  path: '',
  component: CampaignsComponent,
  children: [{
    path: 'list',
    component: CampaignsTableComponent,
  }, {
    path: 'create',
    component: CampaignFormComponent,
  }, {
    path: 'edit',
    component: CampaignFormComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignsRoutingModule { }

export const routedComponents = [
  CampaignsComponent,
  CampaignsTableComponent,
  CampaignFormComponent,
];
