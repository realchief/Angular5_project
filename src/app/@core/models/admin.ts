export class Advertiser {
  id: number = 0;
  name: string = '';
  status: number = 0;
  currentBalance: number = 0;
  credit: number = 0;
  margin: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class User {
  id: number = 0;
  name: string = '';
  email: string = '';
  userName: string = '';
  lastLogin: string = '';
  status: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
