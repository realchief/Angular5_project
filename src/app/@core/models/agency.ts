export class Agency {
  id: number = 0;
  name: string = '';
  active: number = 0;
  min_allowed_balance: number = 0;
  margin: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
