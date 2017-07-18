import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// This describes the class that follows it
@NgModule({
  imports:      [ BrowserModule ], // what stuff do I need?
  declarations: [ AppComponent ], // what things are in my app?
  bootstrap:    [ AppComponent ] // where do I start?
})
export class AppModule { }
