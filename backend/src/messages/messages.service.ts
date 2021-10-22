import { Body, Injectable } from '@nestjs/common';
import { Message } from './messages.interface';

@Injectable()
export class MessagesService {
  createMessage(@Body() data: Message): void {
    console.log(data);
  }
  findAll(): string[] {
    return ['here will come some logic', 'message 2'];
  }
}
