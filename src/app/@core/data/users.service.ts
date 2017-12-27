import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

import { AdxApiService } from '../api/adx-api.service';
import BaseService from './base.service';
import { User, ProfileData } from '../models';

let counter = 0;

@Injectable()
export class UserService {
  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor(protected api: AdxApiService) {
  }

  convertArrayToObjectList(constants): any {
    return Object.keys(constants).reduce((obj, key) => {
      const item = constants[key];
      obj[key] = item.reduce((prev, next) => {
        prev[next.id] = next;
        return prev;
      }, {});
      return obj;
    }, {})
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getProfile(): Observable<ProfileData> {
    const currentUserOb = this.api.getCurrentUser();
    const constantsOb = this.api.getConstants();
    const settingsProfileOb = this.api.getSettingsProfile();
    
    return Observable.forkJoin([currentUserOb, constantsOb, settingsProfileOb])
      .map((data: any[]) => {
        const currentUser = data[0];
        const constants = this.convertArrayToObjectList(data[1]);
        const settingsProfile = data[2];

        const profileData = new ProfileData(currentUser);
        profileData.notifications.shortrage_report = settingsProfile.Notification.shortage
        return profileData;
      });
  }

  updateProfile(profileData): Observable<any> {
    return this.api.updateProfile(profileData);
  }

  getCurrentUser(): Observable<User> {
    return this.api.getCurrentUser();
  }
}
