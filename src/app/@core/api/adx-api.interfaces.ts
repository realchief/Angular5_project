import { Campaign } from '../models';

export interface GetCampaignsInterface {
  count: number,
  data: Campaign[];
}
