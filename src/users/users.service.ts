import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class UsersService {
  constructor(private config: ConfigService) {}

  getName(): any {
    const secretString = this.config.get('PASSWORD_SECRET');
    return { message: 'Aldous Javier', secretString };
  }

  async testFunc(object: any): Promise<any> {
    return await Promise.resolve({ message: 'async', object });
  }
}
