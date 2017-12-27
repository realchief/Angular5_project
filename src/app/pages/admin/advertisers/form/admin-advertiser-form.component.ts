import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminDataService } from '../../../../@core/data/admin-data.service';
// import { Advertiser } from '../../../../@core/models';

@Component({
  selector: 'adx-admin-advertiser-form',
  styleUrls: ['./admin-advertiser-form.component.scss'],
  templateUrl: './admin-advertiser-form.component.html',
})
export class AdminAdvertiserFormComponent implements OnInit {
  user = {};
  position = 'left';

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

  navClicked(nav) {
    if (nav === 'admin') {
      this.router.navigate(['/pages/admin/tabs/users']);
    } else if (nav === 'advertisers') {
      this.router.navigate(['/pages/admin/tabs/advertisers']);
    }
  }
}
