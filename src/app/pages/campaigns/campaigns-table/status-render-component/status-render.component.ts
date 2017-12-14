import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

// https://github.com/akveo/ng2-smart-table/issues/533

@Component({
  template: `
  <nb-checkbox></nb-checkbox>
  `,
})
export class StatusRenderComponent implements ViewCell {

  renderValue: string;
  
  @Input() value: string | number;
  @Input() rowData: any;
  
  ngOnInit() {
    console.log(this.value);
    this.renderValue = this.value.toString().toUpperCase();
  }
}
