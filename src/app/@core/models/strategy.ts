export class Strategy {
  id: number = 0;
  name: string = '';
  active: number = 0;
  channel: number = 0;
  use_campaign_start_date: number = 0;
  use_campaign_end_date: number = 0;
  start_date_interface: string = '';
  start_time_interface: string = '';
  end_date_interface: string = '';
  end_time_interface: string = '';
  is_unlimited_budget: number = 0;
  total_budget: number = 0;
  max_bid: number = 0;
  budget_pacing_type: number = 0;
  local_budget: number = 0;
  budget_period: number = 0;
  frequency_cap_per_user_impressions: number = 0;
  frequency_cap_pacing_type: number = 0;
  frequency_cap_time_units_count: number = 0;
  frequency_cap_per_user_impressions_period: number = 0;
  frequency_cap_per_source: number = 0;
  frequency_cap_per_source_period: number = 0;
  source_definition: number = 0;
  impressions_cap_is_unlimited: number = 0;
  impressions_cap: number = 0;
  rtb_supply_type_open_or_private: number = 0;
  inventory_types: string = '';
  any_ssp_is_allowed: number = 0;
  any_rtb_deal_is_allowed: number = 0;
  is_all_days_part: number = 0;
  macros_custom_data: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
