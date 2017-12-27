export class Payment {
  balance: number = 0;
  id: number = 0;
  min_allowed_balance: number = 0;
  username: string = '';
  utype: number = 0;
  type: string = '';
  credit: number = 0;
  amount: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}