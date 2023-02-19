import {
  Controller,
  Req,
  Get,
  Post,
  HttpStatus,
  Res,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';
import { SampleDTO } from './dto/sample.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  display(@Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json({ name: 'Aldous' });
  }

  @Post('sample-post')
  async samplePost(@Body() sampleDTO: SampleDTO, @Res() res: Response) {
    const result = await this.usersService.testFunc(sampleDTO);
    return res.status(HttpStatus.OK).json(result);
  }
}
