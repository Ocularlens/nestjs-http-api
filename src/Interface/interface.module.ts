import { Module } from '@nestjs/common';
import { ControllerModule } from './Controller/controller.module';

@Module({
  imports: [ControllerModule],
})
export class InterfaceModule {}
