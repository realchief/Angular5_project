import {
  Campaign,
  Report,
} from '../models';

export interface GetCampaignsInterface {
  count: number,
  data: Campaign[];
}

export interface GetReportsInterface {
  count: number,
  data: Report[];
}
