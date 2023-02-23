import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/database.module';
import { ArticleRepositoryModule } from './Article/article.module';

@Module({
  imports: [ArticleRepositoryModule, DatabaseModule],
  exports: [ArticleRepositoryModule],
})
export class RepositoryModule {}
