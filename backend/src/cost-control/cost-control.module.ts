import { Module } from '@nestjs/common';
import { CostControlService } from './cost-control.service';
import { CostControlController } from './cost-control.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostControl } from './entities/cost-control.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([CostControl]), HttpModule],
  controllers: [CostControlController],
  providers: [CostControlService],
})
export class CostControlModule {}
