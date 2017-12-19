export class IpList {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  relation_type: number = 0;
  size: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
