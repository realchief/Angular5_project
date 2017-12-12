export class Campaign {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  iab_category: string[] = [];
  time_zone: number = 0;
  active: number = 0;
  is_unlimited_budget: number = 1;
  daily_budget_is_unlimited: number = 1;
  daily_budget: number = 0;
  frequency_cap: number = 0;
  frequency_cap_type: number = 1;
  frequency_cap_period: number = 0;
  macros_custom_data: string = '';
  attribution_enabled: number = 1;
  conversion_pixel_id: number = 0;
  pixel_events_repeat: number = 0;
  pixel_events_repeat_time: number = 0;
  pixel_events_repeat_period: number = 0;
  post_click_window_enabled: number = 1;
  post_click_window_period: number = 0;
  post_click_window: number = 0;
  post_view_window_enabled: number = 1;
  post_view_window_period: number = 5;
  post_view_window: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
