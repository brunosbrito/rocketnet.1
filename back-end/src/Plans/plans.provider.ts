import { DataSource } from 'typeorm';
import { Plans } from './plans.entity';
export const plansProvider = [
  {
    provide: 'PLANS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Plans),
    inject: ['DATA_SOURCE'],
  },
];
