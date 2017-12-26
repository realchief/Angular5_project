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
  Advertiser,
  User,
  Organization,
  Agency,
} from '../models';
import {
  GetCampaignsInterface,
  GetReportsInterface,
  GetAdvertisersInterface,
  GetUsersInterface,
  GetOrganizationInterface2,
} from './adx-api.interfaces';

const APIv1_URL = environment.apiV1Url;
const API_URL = environment.apiUrl;

@Injectable()
export class AdxApi2Service {

  constructor(
    private http: HttpClient
  ) {
  }

  public getCampaigns(limit: number, offset: number): Observable<Campaign[]> {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetCampaignsInterface>(APIv1_URL + '/campaigns', { params })
      .map(result => result.data.map(campaign => new Campaign(campaign)))
      .catch(this.handleError);
  }

  public createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .post(APIv1_URL + '/campaigns', campaign)
      .map(() => campaign)
      .catch(this.handleError);
  }

  public getCampaignById(campaignId: number): Observable<Campaign> {
    return this.http
      .get<Campaign>(APIv1_URL + '/campaigns/' + campaignId)
      .map(response => {
        return new Campaign(response);
      })
      .catch(this.handleError);
  }

  public updateCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .put(APIv1_URL + '/campaigns/' + campaign.id, campaign)
      .map(response => campaign)
      .catch(this.handleError);
  }

  public deleteCampaignById(campaignId: number): Observable<null> {
    return this.http
      .delete(APIv1_URL + '/campaigns/' + campaignId)
      .map(response => null)
      .catch(this.handleError);
  }

  // Reports
  public getReports(limit: number, offset: number): Observable<Report[]> {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetReportsInterface>(APIv1_URL + '/reports', { params })
      .map(result => result.data.map(report => new Report(report)))
      .catch(this.handleError);
  }

  // Admin - Organizations
  public getOrganizations(limit: number, offset: number): Observable<Organization[]> {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetOrganizationInterface2>(API_URL + '/organizations/', { params })
      .map(result => result.response.data.map(organization => new Organization(organization)))
      .catch(this.handleError);
  }

  public updateOrganization(organizaion: Organization): Observable<Organization> {
    return this.http
      .put(API_URL + '/organizations' + organizaion.id, organizaion)
      .map(response => organizaion)
      .catch(this.handleError);
  }

  public getOrganizationById(id: number): Observable<Organization> {
    return this.http
      .get<Organization>(API_URL + '/organizations' + id)
      .map(response => {
        return new Organization(response);
      })
      .catch(this.handleError);
  }

  // Admin - Agencies
  public getAgencies(organizationId: number, limit: number, offset: number): Observable<Agency[]> {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('offset', String(offset));

    return this.http
      .get<GetUsersInterface>(API_URL + '/agencies' + organizationId, { params })
      .map(result => result.data.map(agency => new Agency(agency)))
      .catch(this.handleError);
  }

  public updateAgency(agency: Agency): Observable<Agency> {
    return this.http
      .put(API_URL + '/agencies' + agency.id, agency)
      .map(response => agency)
      .catch(this.handleError);
  }

  public getAgencyById(organizationId: number, agencyId: number): Observable<Agency> {
    return this.http
      .get<Agency>(API_URL + '/organizations' + organizationId + '/agencies' + agencyId)
      .map(response => {
        return new Agency(response);
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}