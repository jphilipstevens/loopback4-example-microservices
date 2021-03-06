import {Entity, model, ModelDefinition} from '@loopback/repository';

@model(require('./account/model-definition'))
export class Account extends Entity {
  static definition = new ModelDefinition(
    require('./account/model-definition'),
  );
  static modelName = 'Account';

  id: string;
  customerNumber: string;
  balance: number;
  branch: string;
  type: string;
  avgBalance: number;
  minimumBalance: number;

  constructor(body?: Partial<Account>) {
    super();
    if (body) {
      Object.assign(this, body);
    }
  }
}
