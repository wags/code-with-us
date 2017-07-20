import { Component } from '@angular/core';

import { Customer } from '../model';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  regions = ['north', 'east', 'south', 'west', 'midwest'];

  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      street: '1503 Clark Street Rd',
      city: 'Auburn',
      state: 'New York',
      region: 'east',
    }
  };

  hideAddress = false;
}
