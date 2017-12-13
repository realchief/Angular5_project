import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adx-campaign-form',
  styleUrls: ['./campaign-form.component.scss'],
  templateUrl: './campaign-form.component.html',
})
export class CampaignFormComponent {
  starRate = 2;
  heartRate = 4;

  campaign = {};
}
