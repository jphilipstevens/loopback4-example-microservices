import {api} from '@loopback/core';
import {def} from './CustomerController.api';
import {CustomerRepository} from '../repositories/customer';

@api(def)
export class CustomerController {
  repository: CustomerRepository;

  constructor() {
    this.repository = new CustomerRepository();
  }

  // tslint:disable-next-line:no-any
  async getCustomers(filter): Promise<any> {
    return await this.repository.find(filter);
  }
}
