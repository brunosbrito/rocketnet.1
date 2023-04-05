import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Coverage } from './coverage.entity';

@Injectable()
export class CoverageService {
  constructor(
    @Inject('COVERAGE_REPOSITORY')
    private coverageRepository: Repository<Coverage>,
  ) {}

  async findByCep(cep: string): Promise<Coverage> {
    const plan = await this.coverageRepository.findOne({ where: { cep: cep } });
    return plan;
  }
}
