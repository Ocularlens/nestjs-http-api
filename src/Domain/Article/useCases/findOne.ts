import { Injectable, Inject } from '@nestjs/common';
import { ArticleRepository as IArticleRepository } from 'src/Infra/Repository/Article/article.repository';

const ArticleRepo = () => Inject('ArticleRepo');

@Injectable()
export class FindOne {
  constructor(
    @ArticleRepo() private readonly articleRepository: IArticleRepository,
  ) {}

  public async execute(id: number) {
    return await this.articleRepository.findOne(id);
  }
}
