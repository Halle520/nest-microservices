import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { log } from 'console';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    log('handleUserCreated-COMMUNICATION', data);
    // Email to users
  }
}
