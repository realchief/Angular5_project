import { User } from './adx-api-module.models';

export class ProfileData extends User {
  notifications: {
    shortrage_report: string;
  } = {
    shortrage_report: '',
  };

  constructor(values: Object = {}) {
    super({});
    Object.assign(this, values);
  }
}
