import { Module } from '@nestjs/common';
import { ClientModule } from './Client/client.module';
import { PlansModule } from './Plans/plans.module';
import { CoverageModule } from './Coverage/coverage.module';

@Module({
  imports: [ClientModule, PlansModule, CoverageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
