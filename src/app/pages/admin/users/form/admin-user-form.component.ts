import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminDataService } from '../../../../@core/data/admin-data.service';

@Component({
  selector: 'adx-admin-user-form',
  styleUrls: ['./admin-user-form.component.scss'],
  templateUrl: './admin-user-form.component.html',
})
export class AdminUserFormComponent implements OnInit {
  user = {};

  constructor(private service: AdminDataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        this.service.getUserById2(id).subscribe(user => {
          this.user = user;
        });
      }
    });
  }
}

