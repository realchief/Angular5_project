import { NgModule, ModuleWithProviders } from '@angular/core';

import { CampaignDataService } from './campaign-data/campaign-data.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [],
  exports: []
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [CampaignDataService]
    };
  }
}