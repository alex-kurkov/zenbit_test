import { Injectable, Inject, Body } from '@nestjs/common';
import { MessageEnt } from './message.entity';
import { MESSAGE_REPOSITORY } from 'src/core/constants';

@Injectable()
export class MessagesService {
  constructor(
    @Inject(MESSAGE_REPOSITORY)
    private readonly messageRepository: typeof MessageEnt,
  ) {}

  async create(@Body() data): Promise<MessageEnt> {
    console.log(data);
    return await this.messageRepository.create({ ...data });
  }
  async findAll(): Promise<MessageEnt[]> {
    return await this.messageRepository.findAll({});
  }
}
