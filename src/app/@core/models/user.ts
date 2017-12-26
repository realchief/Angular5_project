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

