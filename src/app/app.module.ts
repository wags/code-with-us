import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';

// This describes the class that follows it
@NgModule({
  imports: [BrowserModule, FormsModule], // what stuff do I need?
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ], // what things are in my app?
  bootstrap: [AppComponent] // where do I start?
})
export class AppModule { }
