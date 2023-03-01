import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InterfaceModule } from '../Interface/interface.module';
import { InfraModule } from '../Infra/infra.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    InfraModule,
    InterfaceModule,
  ],
})
export class AppModule {}
