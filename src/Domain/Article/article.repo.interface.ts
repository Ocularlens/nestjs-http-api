import { Article } from './article';

export interface ArticleRepository {
  create(createArticleDto: Partial<Article>): Article;

  findAll(): Array<Article>;

  findDrafts(): Array<Article>;

  findOne(id: number): Article;

  update(id: number, updateArticleDto: Partial<Article>): Article;

  remove(id: number): Article;
}
