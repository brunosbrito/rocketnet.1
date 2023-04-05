import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CoverageService } from './coverage.service';
import { Coverage } from './coverage.entity';

@Controller('coverage')
export class CoverageController {
  constructor(private coverageService: CoverageService) {}

  @Get(':cep')
  async findByCep(@Param('cep') cep: string): Promise<Coverage> {
    const result = await this.coverageService.findByCep(cep);
    if (!result) {
      throw new HttpException(`CEP ${cep} not found`, HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
