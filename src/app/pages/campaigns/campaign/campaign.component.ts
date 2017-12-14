import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adx-campaign',
  styleUrls: ['./campaign.component.scss'],
  templateUrl: './campaign.component.html',
})
export class CampaignComponent implements OnInit {
  starRate = 2;
  heartRate = 4;

  campaignId: number = 0;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params['id']) {
        this.campaignId = params['id'];
      }

       // In a real app: dispatch action to load the details here.
    });
  }
}
