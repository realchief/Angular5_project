import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adx-admin-tab',
  styleUrls: ['./admin-tab.component.scss'],
  templateUrl: './admin-tab.component.html',
})
export class AdminTabComponent implements OnInit {
  nextTab: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

  onChangeTab($event) {
    console.log($event);
  }
}
