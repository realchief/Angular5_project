import {
  Campaign,
  Report,
} from '../models';
import {
  Advertiser,
  User,
} from '../models/admin';

export interface GetCampaignsInterface {
  count: number,
  data: Campaign[];
}

export interface GetReportsInterface {
  count: number,
  data: Report[];
}

export interface GetAdvertisersInterface {
  count: number,
  data: Advertiser[];
}

export interface GetUsersInterface {
  count: number,
  data: User[];
}
