import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { messagesProviders } from './messages.providers';

@Module({
  // imports: [],
  controllers: [MessagesController],
  providers: [MessagesService, ...messagesProviders],
})
export class MessagesModule {}
