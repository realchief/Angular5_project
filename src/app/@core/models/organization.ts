export class Organization {
  id: number = 0;
  name: string = '';
  active: number = 0;
  min_allowed_balance: number = 0;
  margin: number = 0;
  owner_exchange_commission: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Organization2 {
  active: number = 0;
  agency_user_id: string = '';
  balance: number = 0;
  email: string = '';
  id: string = '';
  min_allowed_balance: number = 0;
  name: string = '';
  subdomain_id: number = 0;
  username: string = '';
  utype: number = 0;
}
