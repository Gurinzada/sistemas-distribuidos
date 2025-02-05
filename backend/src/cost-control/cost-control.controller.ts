import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostControlService } from './cost-control.service';
import { CreateCostControlDto } from './dto/create-cost-control.dto';
import { UpdateCostControlDto } from './dto/update-cost-control.dto';

@Controller('cost-control')
export class CostControlController {
  constructor(private readonly costControlService: CostControlService) {}

  @Post()
  create(@Body() createCostControlDto: CreateCostControlDto) {
    return this.costControlService.create(createCostControlDto);
  }

  @Get()
  findAll() {
    return this.costControlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costControlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostControlDto: UpdateCostControlDto) {
    return this.costControlService.update(+id, updateCostControlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costControlService.remove(+id);
  }
}
