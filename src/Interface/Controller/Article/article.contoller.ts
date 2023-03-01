import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  FindAll,
  Create,
  Update,
  Remove,
  FindDrafts,
  FindOne,
} from 'src/Domain/Article/useCases';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ArticleEntity } from 'src/Domain/Article/article.entity';
import { AuthGuard } from '../../../App/Auth/Guard/auth.guard';
import { CreateArticleDto } from './create-article.dto';
import { UpdateArticleDto } from './update-article.dto';

@Controller('articles')
@ApiBearerAuth()
@ApiTags('articles')
@UseGuards(AuthGuard)
export class ArticleController {
  constructor(
    private readonly findAllArticles: FindAll,
    private readonly createArticle: Create,
    private readonly updateArticle: Update,
    private readonly removeArticle: Remove,
    private readonly findDraftArticles: FindDrafts,
    private readonly findOneArticle: FindOne,
  ) {}

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.findAllArticles.execute();
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    return this.findDraftArticles.execute();
  }

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.createArticle.execute(createArticleDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneArticle.execute(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.updateArticle.execute(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param('id') id: string) {
    return this.removeArticle.execute(+id);
  }
}
