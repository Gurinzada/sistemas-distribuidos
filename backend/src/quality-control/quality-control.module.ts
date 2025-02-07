import { Module } from '@nestjs/common';
import { QualityControlService } from './quality-control.service';
import { QualityControlController } from './quality-control.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { QualityControl } from './entities/quality-control.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QualityControl]), HttpModule],
  controllers: [QualityControlController],
  providers: [QualityControlService],
})
export class QualityControlModule {}
