import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import { AdminDataService } from '../../../../@core/data/admin-data.service';
// import { HelperService } from '../../../../@core/utils/helper.service';

@Component({
  selector: 'adx-admin-user-form',
  styleUrls: ['./admin-user-form.component.scss'],
  templateUrl: './admin-user-form.component.html',
})
export class AdminUserFormComponent implements OnInit {
  user = {};
  password = '';
  password2 = '';
  advertisers = [];
  selectedAdvertisers: IMultiSelectOption;
  permission_methods = [];
  permissions = {};
  selectedPermissions: IMultiSelectOption;
  config: ToasterConfig;

  // Settings configuration
  permissionSettings: IMultiSelectSettings = {
    checkedStyle: 'fontawesome',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
  };

  constructor(
    private service: AdminDataService,
    private route: ActivatedRoute,
    private router: Router,
    // private helper: HelperService,
    private toaster: ToasterService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];

        this.getUserData(id).subscribe(result => {
          this.user = result.user;
          console.log(this.selectedPermissions);
        });
        this.service.getOrganizations(10000, 0).subscribe(result => {
          this.advertisers = result;
        });
      }
    });
  }

  getUserData(id: number) {
    const getUserOb = this.service.getUserById2(id);
    const getNewUserOb = this.service.getNewUser();

    return Observable.forkJoin([getUserOb, getNewUserOb])
    .map((data: any[]) => {
      const user = data[0];
      const newUser = data[1];

      const permission_methods = newUser.permission_methods;
      permission_methods.map(pm => {
        this.permissions[pm.id] = [];
        this.selectedPermissions[pm.id] = [];
      });
      newUser.permissions.map((item, index) => {
        permission_methods.map(pm => {
          this.permissions[pm.id].push(item);
        });
        this.selectedPermissions[item.default_value].push(item.id);
      });
      this.permission_methods = permission_methods;

      return {
        user,
        newUser,
      };
    });
  }

  onAdvertisersChange() {
    console.log(this.selectedAdvertisers);
  }

  onPermissionsChange() {
    console.log(this.selectedPermissions);
  }

  saveClicked(event) {
    const userData = this.user;

      // subjects[0]:57293
      // Permission[permissions][2][value]:1
      // Permission[permissions][2][access]:update
      // Permission[permissions][3][value]:1
      // Permission[permissions][3][access]:update
      // Permission[permissions][4][value]:1
      // Permission[permissions][4][access]:update
      // Permission[permissions][5][value]:1
      // Permission[permissions][5][access]:update
      // Permission[permissions][6][value]:1
      // Permission[permissions][6][access]:update
      // Permission[permissions][11][value]:1
      // Permission[permissions][11][access]:update
      // Permission[permissions][12][value]:1
      // Permission[permissions][12][access]:update
      // Permission[permissions][13][value]:1
      // Permission[permissions][13][access]:update
      // Permission[permissions][14][value]:1
      // Permission[permissions][14][access]:update
      // Permission[permissions][16][value]:1
      // Permission[permissions][16][access]:update
      // Permission[permissions][27][value]:1
      // Permission[permissions][27][access]:update
      // Permission[permissions][33][value]:1
      // Permission[permissions][33][access]:update
      // Permission[organization][3][agency][57292][advertiser][57293][value]]:1

    this.service.saveUserModule(userData).subscribe(result => {
      if (result.data.success) {
        this.showToast('info', 'Success', 'User data saved successfully.');
        setTimeout(() => {
          this.router.navigate(['/pages/admin/tabs/advertisers']);
        }, 5000);
      } else {
        this.showToast('error', 'Error', result.messasge);
      }
    });
  }

  cancelClicked(event) {
    this.router.navigate(['/pages/admin/tabs/users']);
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'fade',
      limit: 5,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toaster.popAsync(toast);
  }

  navClicked(nav) {
    if (nav === 'users') {
      this.router.navigate(['/pages/admin/tabs/users']);
    } else if (nav === 'advertisers') {
      this.router.navigate(['/pages/admin/tabs/advertisers']);
    }
  }
}

