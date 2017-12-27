export class RtbEndpoint2 {
  id: number = 0;
  name: string = '';
  TestRTB: string = '';
  display_name: string = '';
  status: number = 1;
  associated_user_id: number = 0;
  url: string = '';
  created: string = '';
  updated: string = '';
  type: number = 0;
  forensiq_enabled: number = 0;
  forensiq_requests_limit: number = 0;
  supply_type: number = 0;
  supply_types: number = 0;
  parent_ssp_id: number = 0;
  test_mode: number = 0;
  ct_unencoded: string = '';
  ct_encoded: string = '';
  ct_dbl_encoded: string = '';
  disabled_fields: string = '';
  display_simple_name: string = '';
  users_sync_default_expiration_days: number = 0;
  subdomain_id: number = 0;
  dsp_users_sync_url: string = '';
  redirect_sync_to: string = '';
  init_sync_from: string = '';
  adomains_black_list: Array<string> = [];
  available_for_simple: number = 0;
  allow_empty_domains: number = 0;
  export_is_forbidden: number = 0;
  responses_with_cors: number = 0;
  nurl_in_adm: number = 0;
  required_vendors: string = '';
  max_response_time: number = 0;
  max_qps: number = 0;
  exchange: number = 0;
  rtb_pop: number = 0;

  phase: string = '';
  suuplyType: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
