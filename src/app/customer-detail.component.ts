import { Component, Input } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent {
  @Input() customer: Customer;

  regions = ['North', 'East', 'South', 'West', 'Midwest'];
  states = ['California', 'Illinois', 'Jalisco', 'New York', 'Quebec'];

  showAddress = true;
}
