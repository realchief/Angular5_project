import { Component } from '@angular/core';
import { UserService } from '../../@core/data/users.service';
import { User } from '../../@core/models';

@Component({
  selector: 'adx-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  user = {};

  constructor(private service: UserService) {
    this.service.getProfile().subscribe(profile => {
      this.user = profile ;
    })
  }

}
