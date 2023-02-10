import { Controller, Req, Get } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  display(@Req() req: Request) {
    console.log({ req });
    return { message: 'ALDOUS JAVIER' };
  }
}
