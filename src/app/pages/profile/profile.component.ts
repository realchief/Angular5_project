import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../../@core/data/users.service';
// import { User } from '../../@core/models';

@Component({
  selector: 'adx-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  user = {};
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private service: UserService, private location: Location) {
    this.service.getProfile().subscribe(profile => {
      // console.log(profile);
      this.user = profile ;
    });
  }

  saveClicked(event) {
    const profileData = {
      'User_Me[old_password]': this.oldPassword,
      'User_Me[password]': this.newPassword,
      'Notifications[shortage]': 0,
    };

    this.service.updateProfile(profileData).subscribe(result => {
      if (result.success === 'true') {}
    });
  }

  cancelClicked(event) {
    this.location.back();
  }
}
