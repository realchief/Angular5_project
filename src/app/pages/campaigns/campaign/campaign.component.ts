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

  campaign = {};
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params['campaign']) {
        this.campaign = params['campaign']; // (+) converts string 'id' to a number
      }

       // In a real app: dispatch action to load the details here.
    });
  }
}
