import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {
  Campaign,
  Report,
} from '../models';
import {
  Advertiser,
  User,
} from '../models/admin'
import {
  GetCampaignsInterface,
  GetReportsInterface,
  GetAdvertisersInterface,
  GetUsersInterface,
} from './adx-api.interfaces';

const API_URL = environment.apiUrl;

@Injectable()
export class AdxApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getCampaigns(limit: number, offset: number): Observable<Campaign[]> {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetCampaignsInterface>(API_URL + '/campaigns', { params })
      .map(result => result.data.map(campaign => new Campaign(campaign)))
      .catch(this.handleError);
  }

  public createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .post(API_URL + '/campaigns', campaign)
      .map(() => campaign)
      .catch(this.handleError);
  }

  public getCampaignById(campaignId: number): Observable<Campaign> {
    return this.http
      .get<Campaign>(API_URL + '/campaigns/' + campaignId)
      .map(response => {
        return new Campaign(response);
      })
      .catch(this.handleError);
  }

  public updateCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .put(API_URL + '/campaigns/' + campaign.id, campaign)
      .map(response => campaign)
      .catch(this.handleError);
  }

  public deleteCampaignById(campaignId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/campaigns/' + campaignId)
      .map(response => null)
      .catch(this.handleError);
  }

  public getReports(limit: number, offset: number): Observable<Report[]> {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetReportsInterface>(API_URL + '/reports', { params })
      .map(result => result.data.map(report => new Report(report)))
      .catch(this.handleError);
  }

  // Admin - Advertisers
  public getAdvertisers(limit: number, offset: number): Observable<Advertiser[]> {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetAdvertisersInterface>(API_URL + '/admin/advertisers', { params })
      .map(result => result.data.map(advertiser => new Advertiser(advertiser)))
      .catch(this.handleError);
  }

  public updateAdvertiser(advertiser: Advertiser): Observable<Advertiser> {
    return this.http
      .put(API_URL + '/admin/advertisers' + advertiser.id, advertiser)
      .map(response => advertiser)
      .catch(this.handleError);
  }

  public getAdvertiserById(advertiserId: number): Observable<Advertiser> {
    return this.http
      .get<Advertiser>(API_URL + '/admin/advertisers' + advertiserId)
      .map(response => {
        return new Advertiser(response);
      })
      .catch(this.handleError);
  }

  // Admin - Users
  public getUsers(limit: number, offset: number): Observable<User[]> {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetUsersInterface>(API_URL + '/admin/users', { params })
      .map(result => result.data.map(user => new User(user)))
      .catch(this.handleError);
  }

  public updateUser(user: User): Observable<User> {
    return this.http
      .put(API_URL + '/admin/users' + user.id, user)
      .map(response => user)
      .catch(this.handleError);
  }

  public getUserById(userId: number): Observable<User> {
    return this.http
      .get<User>(API_URL + '/admin/users' + userId)
      .map(response => {
        return new User(response);
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}