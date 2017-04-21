import { api } from 'loopback-next/packages/loopback';
import { def } from './CustomerController.api';
import { CustomerRepository } from '../repositories/customer';

@api(def)
export class CustomerController {
  repository: CustomerRepository;

  constructor() {
    this.repository = new CustomerRepository();
  }

  async getCustomers(filter): Promise<any> {
    return await this.repository.find(filter);
  }
}
