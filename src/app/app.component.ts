import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{name}}</h1>
    <fieldset>
      <img [src]="image"/>
    </fieldset>
    <label [style.color]="color">Favorite Color</label>
    <button (click)="clicked()">Toggle Color</button>
    <select (change)="colorChange($event.target.value)">
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
  `,
})
export class AppComponent {
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red';

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

}
