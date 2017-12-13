import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Http, Response } from '@angular/http';
import { Campaign } from '../models/campaign';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class AdxApiService {

  constructor(
    private http: Http
  ) {
  }

  public getCampaigns(limit: number, offset: number): Observable<Campaign[]> {
    return this.http
      .get(API_URL + '/campaigns')
      .map(response => {
        const campaigns = response.json();
        return campaigns.map((campaign) => new Campaign(campaign));
      })
      .catch(this.handleError);
  }

  public createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .post(API_URL + '/campaigns', campaign)
      .map(response => {
        return new Campaign(response.json());
      })
      .catch(this.handleError);
  }

  public getCampaignById(campaignId: number): Observable<Campaign> {
    return this.http
      .get(API_URL + '/campaigns/' + campaignId)
      .map(response => {
        return new Campaign(response.json());
      })
      .catch(this.handleError);
  }

  public updateCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .put(API_URL + '/campaigns/' + campaign.id, campaign)
      .map(response => {
        return new Campaign(response.json());
      })
      .catch(this.handleError);
  }

  public deleteCampaignById(campaignId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/campaigns/' + campaignId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}