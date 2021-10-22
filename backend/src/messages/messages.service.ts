import { Injectable, Inject } from '@nestjs/common';
import { MESSAGE_REPOSITORY } from 'src/core/constants';
import { Message } from './message.entity';
import { MessageDto } from './message.dto';

@Injectable()
export class MessagesService {
  constructor(@Inject(MESSAGE_REPOSITORY) private readonly messageRepository: typeof Message) { }

  async create(data: MessageDto): Promise<Message> {
    return await this.messageRepository.create<any>(data)
  }
  async findAll(): Promise<Message[]> {
    return await this.messageRepository.findAll<Message>({})
  }
}
