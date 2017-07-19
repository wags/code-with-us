import { Component } from '@angular/core';

import { Customer } from '../model';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{customer.name}}</h1>
    <p><i>{{customer.name}} is at {{customer.address.street}} in {{customer.address.city}}
      {{customer.address.state}} in the
      {{customer.address.region}} region.</i></p>
    <br>

    <fieldset>
      <label>Name: <input [(ngModel)]="customer.name"></label>
    </fieldset>

    <label><input type="checkbox" [(ngModel)]="hideAddress"> Hide Address</label>

    <div [hidden]="hideAddress">
      <h3>Address:</h3>
      <fieldset>
        <label>Street: <input [(ngModel)]="customer.address.street"></label>
      </fieldset>
      <fieldset>
        <label>City: <input [(ngModel)]="customer.address.city"></label>
      </fieldset>
      <fieldset>
        <label>
          State:
          <select [(ngModel)]="customer.address.state">
            <option>California</option>
            <option>New York</option>
            <option>Jalisco</option>
            <option>Quebec</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <label>
          Region:
          <select [(ngModel)]="customer.address.region">
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
        </label>
      </fieldset>
    </div>
  `,
})
export class AppComponent {
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      street: '1503 Clark Street Rd',
      city: 'Auburn',
      state: 'New York',
      region: 'East',
    }
  };

  hideAddress = false;
}
