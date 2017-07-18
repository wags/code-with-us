import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{name}}</h1>
    <p><i>{{name}} is in the {{region}} region.</i></p>
    <br>

    <fieldset>
      <label>Name:</label><br>
      <input [value]="name"><br>
      <input [value]="name" (input)="name=$event.target.value"><br>
      <input [value]="name" (keyup)="name=$event.target.value"><br>
      <input [value]="name" (keyup.enter)="name=$event.target.value"><br>
      <input [value]="name" (keyup.enter)="name=$event.target.value"
                            (blur)="name=$event.target.value"><br>
      <input [(ngModel)]="name"><br>
      <input [ngModel]="name" (ngModelChange)="name=$event"><br>
    </fieldset>

    <label><input type="checkbox" [(ngModel)]="hideAddress"> Hide Address</label>

    <div [hidden]="hideAddress">
      <h3>Address:</h3>
      <fieldset>
        <label>Street: </label>{{street}}
      </fieldset>
      <fieldset>
        <label>City: </label>{{city}}
      </fieldset>
      <fieldset>
        <label>
          Region:
          <select (change)="regionChange($event.target.value)">
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
  name = 'Alex Smith';
  street = '1503 Clark Street Rd';
  city = 'Auburn';
  region = 'East';
  hideAddress = false;

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}
