import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { ArticleRepository as IArticleRepository } from 'src/Domain/Article/article.repo.interface';
import { Article } from 'src/Domain/Article/article';

@Injectable()
export class ArticleRepository implements IArticleRepository {
  model: any;
  constructor(database: DatabaseService) {
    this.model = database.article;
  }

  create(createArticleDto: Partial<Article>) {
    return this.model.create({ data: createArticleDto });
  }

  findAll() {
    return this.model.findMany({ where: { published: true } });
  }

  findDrafts() {
    return this.model.findMany({ where: { published: false } });
  }

  findOne(id: number) {
    return this.model.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: Partial<Article>) {
    return this.model.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.model.delete({ where: { id } });
  }
}
