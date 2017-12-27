import { Injectable } from '@angular/core';
import { AdxApiService } from '../api/adx-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import {
  Organization,
  Payment,
} from '../models';

@Injectable()
export class AdminDataService {
  constructor(
    private api: AdxApiService,
  ) {
  }

  /***** Advertiser *****/
  // updateAdvertiser(advertiser: Advertiser): Observable<Advertiser> {
  //   return this.api.updateAdvertiser(advertiser);
  // }

  // getAdvertisers(limit: number, offset: number): Observable<Advertiser[]> {
  //   return this.api.getAdvertisers(limit, offset);
  // }

  // getAdvertiserById(advertiserId: number): Observable<Advertiser> {
  //   return this.api.getAdvertiserById(advertiserId);
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
    return this.api.updateOrganization(organization);
  }

  getOrganizations(limit: number, offset: number): Observable<Organization[]> {
    return this.api.getOrganizations(limit, offset);
  }

  getOrganizationById(id: number): Observable<Organization> {
    return this.api.getOrganizationById(id);
  }

  getPaymentNew(): Observable<Object> {
    return this.api.getPaymentNew();
  }

  getPayments(limit: number, offset: number): Observable<Payment[]> {
    return this.api.getPayments(limit, offset);
  }
}
