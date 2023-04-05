import { DataSource } from 'typeorm';
import { Coverage } from './coverage.entity';
export const coverageProvider = [
  {
    provide: 'COVERAGE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Coverage),
    inject: ['DATA_SOURCE'],
  },
];
