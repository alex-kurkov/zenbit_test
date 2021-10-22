import { Module } from '@nestjs/common';
import { MessagesService } from './messages/messages.service';
import { MessagesController } from './messages/messages.controller';

@Module({
  imports: [],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class AppModule {}
