import { Injectable } from '@angular/core';
import { Advertiser, User } from '../models';
import { AdxApiService } from '../api/adx-api.service';
import { AdxApi2Service } from '../api/adx-api2.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import {
  GetCampaignsInterface,
} from '../api/adx-api.interfaces';
import {
  Organization,
  Organiztion2
} from '../models/index';

@Injectable()
export class AdminDataService {
  organizationData = [{
    id: 1,
    name: 'Campaign 1',
    status: 'Active',
    currentBallance: 0,
  }];

  constructor(
    private api: AdxApiService,
    private api2: AdxApi2Service,
  ) {
  }

  /***** Advertiser *****/
  // updateAdvertiser(advertiser: Advertiser): Observable<Advertiser> {
  //   return this.api2.updateAdvertiser(advertiser);
  // }

  // getAdvertisers(limit: number, offset: number): Observable<Advertiser[]> {
  //   return this.api2.getAdvertisers(limit, offset);
  // }

  // getAdvertiserById(advertiserId: number): Observable<Advertiser> {
  //   return this.api2.getAdvertiserById(advertiserId);
  // }

  /***** User *****/
  // updateUser(user: User): Observable<User> {
  //   return this.api.updateUser(user);
  // }

  // getUsers(limit: number, offset: number): Observable<User[]> {
  //   return this.api.getUsers(limit, offset);
  // }

  // getUserById(userId: number): Observable<Advertiser> {
  //   return this.api.getAdvertiserById(userId);
  // }

  /***** Organization *****/
  updateOrganization(organization: Organization): Observable<Organization> {
    return this.api2.updateOrganization(organization);
  }

  getOrganizations(limit: number, offset: number): Observable<Organization[]> {
    return this.api2.getOrganizations(limit, offset);
  }

  getOrganizationById(id: number): Observable<Organization> {
    return this.api2.getOrganizationById(id);
  }

  getOrganizationData() {
    return this.organizationData;
  }
}