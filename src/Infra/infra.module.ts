import { Module } from '@nestjs/common';
import { RepositoryModule } from './Repository/repository.module';

@Module({
  imports: [RepositoryModule],
  exports: [RepositoryModule],
})
export class InfraModule {}
