import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { clientProvider } from './client.provider';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientController],
  providers: [...clientProvider, ClientService],
})
export class ClientModule {}
