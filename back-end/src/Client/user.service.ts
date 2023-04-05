import { Injectable, Inject } from '@nestjs/common';
import { Client } from './client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class clientService {
  constructor(
    @Inject('CLIEN|T_REPOSITORY')
    private clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }
}
