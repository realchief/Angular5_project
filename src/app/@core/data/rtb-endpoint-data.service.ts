import { Injectable } from '@angular/core';
import { RtbEndpoint } from '../models/rtb-endpoint';
import { AdxApiService } from '../api/adx-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import {
  GetCampaignsInterface,
} from '../api/adx-api.interfaces';

@Injectable()
export class RtbEndpointDataService {
  data = [{
    id: 1,
  }];

  constructor(
    private api: AdxApiService
  ) {
  }

  // addRtbEndpoint(rtbEndpoint: RtbEndpoint): Observable<RtbEndpoint> {
  //   return this.api.createRtbEndpoint(rtbEndpoint);
  // }


  getData() {
    return this.data;
  }
}