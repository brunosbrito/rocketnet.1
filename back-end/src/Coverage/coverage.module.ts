import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { CoverageController } from './coverage.controller';
import { coverageProvider } from './coverage.provider';
import { CoverageService } from './coverage.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoverageController],
  providers: [...coverageProvider, CoverageService],
})
export class CoverageModule {}
