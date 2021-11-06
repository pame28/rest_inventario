import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Conn',
  connector: 'mongodb',
  url: 'mongodb+srv://pame:pame123@cluster0.kce7b.mongodb.net/activo',
  host: '',
  port: 27017,
  user: 'pame',
  password: 'pame123',
  database: 'activo',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConnDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Conn';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Conn', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
