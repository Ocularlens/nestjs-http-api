import { Injectable, Inject } from '@nestjs/common';
import { ArticleRepository as IArticleRepository } from 'src/Infra/Repository/Article/article.repository';
import { Article } from '../article';

const ArticleRepo = () => Inject('ArticleRepo');

@Injectable()
export class Update {
  constructor(
    @ArticleRepo() private readonly articleRepository: IArticleRepository,
  ) {}

  public execute(id: number, data: Partial<Article>) {
    return this.articleRepository.update(id, data);
  }
}
