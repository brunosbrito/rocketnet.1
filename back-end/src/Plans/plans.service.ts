import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Plans } from './plans.entity';

@Injectable()
export class PlansService {
  constructor(
    @Inject('PLANS_REPOSITORY')
    private plansRepository: Repository<Plans>,
  ) {}

  async findAll(): Promise<Plans[]> {
    return this.plansRepository.find();
  }

  async findById(id: number): Promise<Plans> {
    const plan = await this.plansRepository.findOne({ where: { id } });
    return plan;
  }
}
