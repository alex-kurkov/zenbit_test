import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { Message } from './messages.interface';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll(): string[] {
    return this.messagesService.findAll();
  }

  @Post('/one')
  @HttpCode(201)
  createMessage(@Body() data: Message): void {
    this.messagesService.createMessage(data);
  }
}
