export class BillingHistory {
  id: number = 0;
  date: Date = new Date();
  credit: number = 0;
  debit: number = 0;
  balance: number = 0;
  user: string = '';
  organizatioin: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
