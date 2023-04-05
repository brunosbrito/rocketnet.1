import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { clientProvider } from './client.provider';
import { ClientService } from './client.service';

@Module({
  imports: [DatabaseModule],
  providers: [...clientProvider, ClientService],
})
export class userModule {}
