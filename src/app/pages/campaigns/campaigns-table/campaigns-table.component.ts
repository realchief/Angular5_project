import { Component } from '@angular/core';
import { Router, Params } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { CampaignDataService } from '../../../@core/data/campaign-data.service';
import { Campaign } from '../../../@core/models/campaign';

@Component({
  selector: 'adx-campaings-table',
  templateUrl: './campaigns-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class CampaignsTableComponent {

  settings = {
    mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
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
        title: 'Campaign',
        type: 'string',
      },
      budget: {
        title: 'Budget',
        type: 'string',
      },
      remaining: {
        title: 'Remaining',
        type: 'string',
      },
      spendYd: {
        title: 'Spend Yd',
        type: 'string',
      },
      pace_td: {
        title: 'Spend Td',
        type: 'string',
      },
      id: {
        title: 'ID',
        type: 'number',
      },
      status: {
        title: 'Status',
        type: 'number',
      },
      checkList: {
        title: 'Checklist',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CampaignDataService, private router: Router) {
    this.service.getCampaings(100, 0).subscribe(data => {
      this.source.load(data);
    })
  }

  onCreate($event): void {
    this.router.navigate(['/pages/campaigns/create'])
  }

  onEdit($event): void {
    this.router.navigate(['/pages/campaigns/edit', { id: $event.data.id }])
  }
            
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
