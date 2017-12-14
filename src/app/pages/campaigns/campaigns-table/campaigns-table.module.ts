import { NgModule } from '@angular/core';

import { StatusRenderComponent } from './status-render-component';

@NgModule({
  declarations: [
    StatusRenderComponent,
  ],
  entryComponents: [StatusRenderComponent]
})
export class CampaignsTableModule { }

export const campaignsTableSubComponents = [
  StatusRenderComponent,
]
