import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

import { NbAuthJWTToken, NbAuthService, NbAuthResult } from '../auth';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: {};

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  submitted: boolean = false;
  errors: string[] = [];
  messages: string[] = [];
  redirectDelay: number = 0;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private authService: NbAuthService,
              protected router: Router) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token && token.getValue()) {
          this.user = token.getPayload()
        }
      })
  }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  onMenuClick($event) {
    switch ($event.title) {
      case 'Log out':
        this.authService.logout('email').subscribe((result: NbAuthResult) => {
          this.submitted = false;
          console.log(result)
          if (result.isSuccess()) {
            this.messages = result.getMessages();
          } else {
            this.errors = result.getErrors();
          }
    
          const redirect = result.getRedirect();
          if (redirect) {
            setTimeout(() => {
              console.log('redirect', redirect);
              return this.router.navigate([redirect]);
            }, this.redirectDelay);
          }
        });
        return;
      default:
        // Do nothing
        console.log($event.title);
    }
  }
}
