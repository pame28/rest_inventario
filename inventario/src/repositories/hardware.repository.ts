import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Hardware, HardwareRelations} from '../models';

export class HardwareRepository extends DefaultCrudRepository<
  Hardware,
  typeof Hardware.prototype.id,
  HardwareRelations
> {
  constructor(
    @inject('datasources.Conn') dataSource: ConnDataSource,
  ) {
    super(Hardware, dataSource);
  }
}
