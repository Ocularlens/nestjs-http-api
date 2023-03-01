import { Module } from '@nestjs/common';
import { AuthGuard } from './Guard/auth.guard';

@Module({
  providers: [AuthGuard],
})
export class AuthModule {}
