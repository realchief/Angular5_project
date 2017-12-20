import { Component } from '@angular/core';
import { Router, Params } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { AdminDataService } from '../../../@core/data/admin-data.service';
import { Advertiser } from '../../../@core/models/admin';
import { StatusRenderComponent } from '../../../@theme/components/status-render-component';

@Component({
  selector: 'adx-admin-advertisers',
  templateUrl: './admin-advertisers.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AdminAdvertisersComponent {

  settings = {
    mode: 'external',
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      id: {
        title: 'ID',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      currentBalance: {
        title: 'Current Balance',
        type: 'string',
      },
      credit: {
        title: 'Credit',
        type: 'string',
      },
      margin: {
        title: 'Margin',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AdminDataService, private router: Router) {
    this.service.getAdvertisers(100, 0).subscribe(data => {
      this.source.load(data);
    })
  }

  onEdit($event): void {
    this.router.navigate(['/pages/admin/advertisers/edit', { id: $event.data.id }])
  }
}
