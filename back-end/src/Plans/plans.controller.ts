import { Controller, Get, Param } from '@nestjs/common';
import { PlansService } from './plans.service';
import { Plans } from './plans.entity';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Get()
  async findAll(): Promise<Plans[]> {
    return this.plansService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Plans> {
    return this.plansService.findById(id);
  }
}
