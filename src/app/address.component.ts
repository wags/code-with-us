import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html'
})

export class AddressComponent {
  @Input() address: Address;

  regions = ['North', 'East', 'South', 'West', 'Midwest'];
  states = ['California', 'Illinois', 'Jalisco', 'New York', 'Quebec'];
}
