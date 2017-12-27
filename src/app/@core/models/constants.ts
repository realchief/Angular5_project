import { IdName, Permission } from './base';

export class Constants {
  add_audio: IdName[];
  bid_type: IdName[];
  budget_pacing_budget_intervals: IdName[];
  budget_pacing_types: IdName[];
  call_to_actions: IdName[];
  channels: IdName[];
  creative_attributes: IdName[];
  creative_events: IdName[];
  creative_statuses: IdName[];
  creative_types: IdName[];
  data_storages: IdName[];
  day_part_timezones: IdName[];
  days: IdName[];
  frequency_cap_pacing_periods: IdName[];
  frequency_cap_pacing_types: IdName[];
  frequency_cap_periods: IdName[];
  frequency_cap_source_definition: IdName[];
  frequency_cap_types: IdName[];
  iab_categories: IdName[];
  inventory_types: IdName[];
  permissions: Permission[];
  pixel_events_repeats: IdName[];
  pixel_type: IdName[];
  post_window_intervals: IdName[];
  relation_types: IdName[];
  repeat_merit_event_periods: IdName[];
  rtb_supply_types: IdName[];
  secure_type_lists: IdName[];
  site_list_relation_types: IdName[];
  sizes: IdName[];
  statuses: IdName[];
  supply_types: IdName[];
  target_any_or_all_of_segments: IdName[];
  test_mode: IdName[];
  time: IdName[];
  time_zones: IdName[];
  vast_types: IdName[];
  video_api_framework_types: IdName[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}