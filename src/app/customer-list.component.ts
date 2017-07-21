import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-list', // to use me, do this in html <my-app>
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent {
  customer: Customer;

  customers: Customer[] = [];

  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}
