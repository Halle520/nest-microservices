import { CreateUserEvent } from './create-user.event';
export declare class AppService {
    private readonly analytics;
    getHello(): string;
    handleUserCreated(user: CreateUserEvent): void;
    getAnalytics(): any[];
}
