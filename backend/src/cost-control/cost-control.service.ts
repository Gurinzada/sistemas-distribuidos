import { Injectable } from '@nestjs/common';
import { CreateCostControlDto } from './dto/create-cost-control.dto';
import { UpdateCostControlDto } from './dto/update-cost-control.dto';

@Injectable()
export class CostControlService {
  create(createCostControlDto: CreateCostControlDto) {
    return 'This action adds a new costControl';
  }

  findAll() {
    return `This action returns all costControl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costControl`;
  }

  update(id: number, updateCostControlDto: UpdateCostControlDto) {
    return `This action updates a #${id} costControl`;
  }

  remove(id: number) {
    return `This action removes a #${id} costControl`;
  }
}
