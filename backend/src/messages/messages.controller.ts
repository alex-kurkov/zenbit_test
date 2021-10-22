import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { MessageDto } from './message.dto';
// import { Message } from './messages.interface';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Post('')
  @HttpCode(201)
  createMessage(@Body() data: MessageDto): void {
    this.messagesService.create(data);
  }
}
