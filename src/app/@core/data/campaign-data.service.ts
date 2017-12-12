import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign';
import { InteractApiService } from '../api/interact-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class CampaignDataService {
  data = [{
    id: 1,
    name: 'Campaign 1',
    user_id: 0,
    iab_category: ['string'],
    time_zone: 0,
    active: 0,
    is_unlimited_budget: 1,
    daily_budget_is_unlimited: 1,
    daily_budget: 0,
    frequency_cap: 0,
    frequency_cap_type: 1,
    frequency_cap_period: 0,
    macros_custom_data: '',
    attribution_enabled: 1,
    conversion_pixel_id: 0,
    pixel_events_repeat: 0,
    pixel_events_repeat_time: 0,
    pixel_events_repeat_period: 0,
    post_click_window_enabled: 1,
    post_click_window_period: 0,
    post_click_window: 0,
    post_view_window_enabled: 1,
    post_view_window_period: 5,
    post_view_window: 0,
  }];

  constructor(
    private api: InteractApiService
  ) {
  }

  // POST /campaigns
  addCampaign(campaign: Campaign): Observable<Campaign> {
    return this.api.createCampaign(campaign);
  }

  // DELETE /todos/:id
  deleteCampaignById(campaignId: number): Observable<Campaign> {
    return this.api.deleteCampaignById(campaignId);
  }

  // PUT /todos/:id
  updateTodo(campaign: Campaign): Observable<Campaign> {
    return this.api.updateCampaign(campaign);
  }

  // GET /todos
  getAllCampaings(): Observable<Campaign[]> {
    return this.api.getAllCampaigns();
  }

  // GET /todos/:id
  getCampaignById(campaignId: number): Observable<Campaign> {
    return this.api.getCampaignById(campaignId);
  }

  getData() {
    return this.data;
  }
}