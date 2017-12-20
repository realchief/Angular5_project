import { Component } from '@angular/core';
import { Router, Params } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { AdminDataService } from '../../../../@core/data/admin-data.service';
import { User } from '../../../../@core/models/admin';
import { StatusRenderComponent } from '../../../../@theme/components/status-render-component';

@Component({
  selector: 'adx-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AdminUsersListComponent {

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
        title: 'Name',
        type: 'string',
      },
      id: {
        title: 'ID',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'number',
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
    this.service.getUsers(100, 0).subscribe(data => {
      this.source.load(data);
    })
  }

  onEdit($event): void {
    this.router.navigate(['/pages/admin/users/edit', { id: $event.data.id }])
  }
            
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
