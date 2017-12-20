import { Injectable } from '@angular/core';
import { Advertiser, User } from '../models/admin';
import { AdxApiService } from '../api/adx-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import {
  GetCampaignsInterface,
} from '../api/adx-api.interfaces';

@Injectable()
export class AdminDataService {
  data = [{
    id: 1,
    name: 'Campaign 1',
  }];

  constructor(
    private api: AdxApiService
  ) {
  }

  /***** Advertiser *****/
  // PUT /admin/advertisers/:id
  updateAdvertiser(advertiser: Advertiser): Observable<Advertiser> {
    return this.api.updateAdvertiser(advertiser);
  }

  // GET /advertisers
  getAdvertisers(limit: number, offset: number): Observable<Advertiser[]> {
    return this.api.getAdvertisers(limit, offset);
  }

  // GET /advertisers/:id
  getAdvertiserById(advertiserId: number): Observable<Advertiser> {
    return this.api.getAdvertiserById(advertiserId);
  }

  /***** User *****/
  // PUT /admin/users/:id
  updateUser(user: User): Observable<User> {
    return this.api.updateUser(user);
  }

  // GET /users
  getUsers(limit: number, offset: number): Observable<User[]> {
    return this.api.getUsers(limit, offset);
  }

  // GET /users/:id
  getUserById(userId: number): Observable<Advertiser> {
    return this.api.getAdvertiserById(userId);
  }

  getData() {
    return this.data;
  }
}