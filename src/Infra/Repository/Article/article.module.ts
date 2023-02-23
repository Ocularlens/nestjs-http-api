import { Module } from '@nestjs/common';
import { ArticleRepoProvider } from './article.provider';
import { DatabaseModule } from 'src/Infra/Database/database.module';

@Module({
  providers: [ArticleRepoProvider],
  imports: [DatabaseModule],
  exports: [ArticleRepoProvider],
})
export class ArticleRepositoryModule {}
