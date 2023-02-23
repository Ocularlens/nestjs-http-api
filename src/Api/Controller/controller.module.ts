import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DomainModule } from '../../Domain/domain.module';
import { ArticleController } from './Article/article.contoller';
import { LoggerMiddleware } from '../Middleware/logger.middleware';

@Module({
  imports: [DomainModule],
  controllers: [ArticleController],
})
export class ControllerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ArticleController);
  }
}
