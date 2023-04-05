import { Body, Controller, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async createClient(@Body() clientData: Client): Promise<Client> {
    return this.clientService.createClient(clientData);
  }
}
