import { Module } from '@nestjs/common';
import { ArticleDomainModule } from './Article/article.module';

@Module({
  imports: [ArticleDomainModule],
  exports: [ArticleDomainModule],
})
export class DomainModule {}
