import {
  Advertiser,
  BillingHistory,
  Campaign,
  Organization,
  Organization2,
  Payment,
  Report,
  User,
} from '../models';

export interface IdNameInterface {
  id: string;
  name: string;
}

export interface PermissionInterface {
  everywhere: number;
  id: number;
  interface_name: number;
  name: number;
  page: number;
  sort: number;
  type: number;
}

export interface GetAdvertisersInterface {
  count: number;
  data: Advertiser[];
}

export interface BillingResponseInterface {
  data: BillingHistory[];
}

export interface GetBillingInterface {
  response: BillingResponseInterface;
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetCampaignsInterface {
  count: number;
  data: Campaign[];
}

export interface ConstantsDataInterface {
  add_audio: IdNameInterface[];
  bid_type: IdNameInterface[];
  budget_pacing_budget_intervals: IdNameInterface[];
  budget_pacing_types: IdNameInterface[];
  call_to_actions: IdNameInterface[];
  channels: IdNameInterface[];
  creative_attributes: IdNameInterface[];
  creative_events: IdNameInterface[];
  creative_statuses: IdNameInterface[];
  creative_types: IdNameInterface[];
  data_storages: IdNameInterface[];
  day_part_timezones: IdNameInterface[];
  days: IdNameInterface[];
  frequency_cap_pacing_periods: IdNameInterface[];
  frequency_cap_pacing_types: IdNameInterface[];
  frequency_cap_periods: IdNameInterface[];
  frequency_cap_source_definition: IdNameInterface[];
  frequency_cap_types: IdNameInterface[];
  iab_categories: IdNameInterface[];
  inventory_types: IdNameInterface[];
  permissions: PermissionInterface[];
  pixel_events_repeats: IdNameInterface[];
  pixel_type: IdNameInterface[];
  post_window_intervals: IdNameInterface[];
  relation_types: IdNameInterface[];
  repeat_merit_event_periods: IdNameInterface[];
  rtb_supply_types: IdNameInterface[];
  secure_type_lists: IdNameInterface[];
  site_list_relation_types: IdNameInterface[];
  sizes: IdNameInterface[];
  statuses: IdNameInterface[];
  supply_types: IdNameInterface[];
  target_any_or_all_of_segments: IdNameInterface[];
  test_mode: IdNameInterface[];
  time: IdNameInterface[];
  time_zones: IdNameInterface[];
  vast_types: IdNameInterface[];
  video_api_framework_types: IdNameInterface[];
}

export interface GetConstantsInterface {
  count: number;
  data: ConstantsDataInterface;
}

export interface GetOrganizationsInterface {
  count: number;
  data: Organization[];
}

export interface OrganizationResponseInterface2 {
  data: Organization2[];
}

export interface GetOrganizationInterface2 {
  response: OrganizationResponseInterface2;
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface UserTypeInterface {
  utype: Object;
}

export interface PaymentNewResponseInterface {
  data: UserTypeInterface;
}

export interface GetPaymentNewInterface {
  response: PaymentNewResponseInterface;
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface PaymentsResponseInterface {
  data: Payment[];
}

export interface GetPaymentsInterface {
  response: PaymentsResponseInterface;
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetReportsInterface {
  count: number;
  data: Report[];
}

export interface RtbData {
  id: number;
  name: string;
}

export interface RtbNewDataInterface {
  active_type: Array<RtbData>;
  subdommains: Array<RtbData>;
  supply_type: Array<RtbData>;
  test_mode: Array<RtbData>;
  test_mode_new: Array<RtbData>;
}

export interface RtbNewResponseInterface {
  data: RtbNewDataInterface;
}

export interface GetRtbNewInterface {
  response: RtbNewResponseInterface;
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface RtbEndpointsResponseInterface2 {
  data: Organization2[];
}

export interface GetRtbEndpointsInterface2 {
  response: RtbEndpointsResponseInterface2;
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetUsersInterface {
  count: number;
  data: User[];
}
