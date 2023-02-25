import { Injectable, Inject } from '@nestjs/common';
import { ArticleRepository as IArticleRepository } from 'src/Infra/Repository/Article/article.repository';

const ArticleRepo = () => Inject('ArticleRepo');

@Injectable()
export class FindDrafts {
  constructor(
    @ArticleRepo() private readonly articleRepository: IArticleRepository,
  ) {}

  public execute() {
    return this.articleRepository.findDrafts();
  }
}
