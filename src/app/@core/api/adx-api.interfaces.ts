import {
  Campaign,
  Report,
  Advertiser,
  User,
  Organization,
  Organiztion2,
} from '../models';

export interface OrganizationDataInterdace2 {
  data: Organiztion2[];
}

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

export interface GetOrganizationInterface2 {
  response: OrganizationDataInterdace2;
  messasge: string,
  success: boolean,
  totalCount: number,
}

export interface GetUsersInterface {
  count: number,
  data: User[];
}

export interface GetOrganizationsInterface {
  count: number,
  data: Organization[];
}
