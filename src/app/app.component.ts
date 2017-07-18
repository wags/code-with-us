import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{name}}</h1>

    <p><i>{{name}} is in the {{region}} region.</i></p>

    <br>
    <button (click)="addressClick()">Show/Hide Address</button>

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

    <fieldset>
      <img [src]="image"/>
    </fieldset>

    <fieldset>
      <label [style.color]="color">Favorite Color</label>
      <button (click)="clicked()">Toggle Color</button>
      <select (change)="colorChange($event.target.value)">
        <option>red</option>
        <option>blue</option>
        <option>green</option>
      </select>
    </fieldset>

  `,
})
export class AppComponent {
  name = 'Alex Smith';
  street = '1503 Clark Street Rd';
  city = 'Auburn';
  region = 'East';
  hideAddress = false;
  image = 'favicon.ico';
  color = 'red';

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}
