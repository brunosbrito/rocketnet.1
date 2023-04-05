import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { plansProvider } from './plans.provider';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PlansController],
  providers: [...plansProvider, PlansService],
})
export class PlansModule {}
