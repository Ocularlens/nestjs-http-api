import { Module } from '@nestjs/common';
import { ArticleRepositoryModule } from 'src/Infra/Repository/Article/article.module';
import {
  Update,
  Create,
  FindAll,
  FindDrafts,
  Remove,
  FindOne,
} from './useCases';

@Module({
  imports: [ArticleRepositoryModule],
  providers: [Update, Create, FindAll, FindDrafts, Remove, FindOne],
  exports: [Update, Create, FindAll, FindDrafts, Remove, FindOne],
})
export class ArticleDomainModule {}
