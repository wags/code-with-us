import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {
  private customersUrl = 'api/customers';
  private statesUrl = 'api/states';

  constructor(
    private loggerService: LoggerService,
    private http: Http
  ) { }

  getCustomersP(): Promise<Customer[]> {
    this.loggerService.log(`Getting customers as a Promise via Http ...`);

    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => {
        const custs = response.json().data as Customer[];
        this.loggerService.log(`Got ${custs.length} customers`);
        return custs;
      },
      error => {
        this.loggerService.log(`Error occurred: ${error}`);
        return Promise.reject('Something bad happened. Please check the console.');
      }
      );
  }

  getCustomers(): Observable<Customer[]> {
    this.loggerService.log(`Getting customers as an Observable via Http ...`);

    return this.http.get(this.customersUrl)
      .map(response => response.json().data as Customer[])
      .do((custs) => {
        this.loggerService.log(`Got ${custs.length} customers`);
      });
  }

  getStates(): Observable<string[]> {
    this.loggerService.log(`Getting states as an Observable via Http ...`);

    return this.http.get(this.statesUrl)
      .map(response => response.json().data as string[])
      .do((states) => {
        this.loggerService.log(`Got ${states.length} states`);
      });
  }
}
