import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdxApiService } from './adx-api.service';
import { AdxApi2Service } from './adx-api2.service';

const SERVICES = [
  AdxApiService,
  AdxApi2Service,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ApiModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
