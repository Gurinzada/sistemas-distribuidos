import { Module } from '@nestjs/common';
import { CostControlService } from './cost-control.service';
import { CostControlController } from './cost-control.controller';

@Module({
  controllers: [CostControlController],
  providers: [CostControlService],
})
export class CostControlModule {}
