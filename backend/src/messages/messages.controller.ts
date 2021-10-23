import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { MessageDto } from './message.dto';
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
  create(@Body() data: MessageDto) {
    this.messagesService.create(data);
  }
}
