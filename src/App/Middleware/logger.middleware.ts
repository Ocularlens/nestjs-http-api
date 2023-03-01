import { Injectable, NestMiddleware, ConsoleLogger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new ConsoleLogger(LoggerMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    const { path } = req;
    this.logger.log(`PATH: ${path}`);
    next();
  }
}
