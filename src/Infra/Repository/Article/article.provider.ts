import { Provider } from '@nestjs/common';
import { ArticleRepository } from './article.repository';

export const ArticleRepoProvider: Provider = {
  provide: 'ArticleRepo',
  useClass: ArticleRepository,
};
