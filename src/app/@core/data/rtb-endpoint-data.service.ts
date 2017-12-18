import { Injectable } from '@angular/core';
import { Rtb } from '../models/rtb';
import { AdxApiService } from '../api/adx-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import {
  GetCampaignsInterface,
} from '../api/adx-api.interfaces';
import { RtbEndpoint } from '../models/rtb-endpoint';

@Injectable()
export class RtbEndpointDataService {
  data = [{
    id: 1,
  }];

  constructor(
    private api: AdxApiService
  ) {
  }

  addRtbEndpoint(rtbEndpoint: RtbEndpoint): Observable<RtbEndpoint> {
    return this.api.createRtbEndpoint(rtbEndpoint);
  }

  deleteCampaignById(campaignId: number): Observable<Campaign> {
    return this.api.deleteCampaignById(campaignId);
  }

  // PUT /campaigns/:id
  updateTodo(campaign: Campaign): Observable<Campaign> {
    return this.api.updateCampaign(campaign);
  }

  // GET /campaigns
  getCampaings(limit: number, offset: number): Observable<Campaign[]> {
    return this.api.getCampaigns(limit, offset);
  }

  // GET /campaigns/:id
  getCampaignById(campaignId: number): Observable<Campaign> {
    return this.api.getCampaignById(campaignId);
  }

  getData() {
    return this.data;
  }
}