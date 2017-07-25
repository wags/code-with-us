import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers } from './test-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const states = ['California', 'Illinois', 'Jalisco', 'New York', 'Quebec'];
    return { customers: createTestCustomers(), states };
  }
}
