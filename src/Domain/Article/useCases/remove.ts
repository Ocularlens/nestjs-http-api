import { Injectable, Inject } from '@nestjs/common';
import { ArticleRepository as IArticleRepository } from 'src/Infra/Repository/Article/article.repository';

const ArticleRepo = () => Inject('ArticleRepo');

@Injectable()
export class Remove {
  constructor(
    @ArticleRepo() private readonly articleRepository: IArticleRepository,
  ) {}

  public execute(id: number) {
    return this.articleRepository.remove(id);
  }
}
