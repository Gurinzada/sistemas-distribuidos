import { PartialType } from '@nestjs/mapped-types';
import { CreateCostControlDto } from './create-cost-control.dto';

export class UpdateCostControlDto extends PartialType(CreateCostControlDto) {}
