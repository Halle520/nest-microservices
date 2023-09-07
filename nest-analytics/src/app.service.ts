import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { log } from 'console';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(user: CreateUserEvent) {
    log('handleUserCreated - ANALYTICS', user);
    this.analytics.push({
      email: user.email,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
