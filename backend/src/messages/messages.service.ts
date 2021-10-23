import { Injectable, Inject } from '@nestjs/common';
import { MessageEnt } from './message.entity';
import { MESSAGE_REPOSITORY } from 'src/core/constants';

@Injectable()
export class MessagesService {
  constructor(
    @Inject(MESSAGE_REPOSITORY)
    private readonly messageRepository: typeof MessageEnt,
  ) {}

  async create(data): Promise<MessageEnt> {
    return await this.messageRepository.create({ ...data });
  }
  async findAll(): Promise<MessageEnt[]> {
    return await this.messageRepository.findAll({});
  }
}
