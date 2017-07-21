import { Component, OnInit } from '@angular/core';

import { Customer } from './model';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list', // to use me, do this in html <my-app>
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer;
  customers: Customer[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }

  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}
