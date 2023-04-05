import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: Repository<Client>,
  ) {}

  async createClient(clientData: Client): Promise<Client> {
    try {
      return await this.clientRepository.save(clientData);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
