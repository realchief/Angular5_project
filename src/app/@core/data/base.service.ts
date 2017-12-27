import { Injectable } from '@angular/core';
import { AdxApiService } from '../api/adx-api.service';

@Injectable()
export default class BaseService {
  constructor(protected api: AdxApiService) {}

  convertArrayToObjectList(constants): any {
    return Object.keys(constants).reduce((obj, key) => {
      const item = constants[key];
      obj[key] = item.reduce((prev, next) => {
        prev[next.id] = next;
        return prev;
      }, {});
      return obj;
    }, {});
  }
}
