import { Component } from '@angular/core';

import { Customer } from '../model';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{name}}</h1>
    <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p>
    <br>

    <fieldset>
      <label>Name: <input [(ngModel)]="name"></label>
    </fieldset>

    <label><input type="checkbox" [(ngModel)]="hideAddress"> Hide Address</label>

    <div [hidden]="hideAddress">
      <h3>Address:</h3>
      <fieldset>
        <label>Street: <input [(ngModel)]="street"></label>
      </fieldset>
      <fieldset>
        <label>City: <input [(ngModel)]="city"></label>
      </fieldset>
      <fieldset>
        <label>
          Region:
          <select [(ngModel)]="region">
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
      state: 'NY',
      region: 'East',
    }
  };

  hideAddress = false;
}
