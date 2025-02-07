import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCostControlDto } from './dto/create-cost-control.dto';
import { UpdateCostControlDto } from './dto/update-cost-control.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CostControl } from './entities/cost-control.entity';
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ConfigService } from '@nestjs/config';

export interface ResponseAPI {
  message: string,
  status_code: number
}

@Injectable()
export class CostControlService {
  constructor(
    @InjectRepository(CostControl)
    private costRepository: Repository<CostControl>,
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {};
  
  private async fetchAPI(body: any) {
    const { data } = await firstValueFrom(
      this.httpService.post<ResponseAPI>(
        this.configService.get<string>('URL_COST_AGENT_API'), 
        body
      ).pipe(
        catchError((error: AxiosError) => {
          throw `Error: ${error.response.data}`
        })
      )
    )

    return data;
  }

  async create(createCostControlDto: CreateCostControlDto) {
    const data = this.costRepository.create(createCostControlDto);

    // Save database
    await this.costRepository.save(data);
        
    return await this.fetchAPI(data);
  }

  async findAll() {
    const inputs = await this.costRepository.find();

    if (!inputs) throw new NotFoundException('Nenhuma entrada encontrada');

    return inputs;
  }

  async findOne(id: number) {
    const input = await this.costRepository.findOneBy({ id });

    if (!input) throw new NotFoundException(`Entrada id:${id} não encontrado`);
    
    return input;
  }

  async update(id: number, updateCostControlDto: UpdateCostControlDto) {
    return await this.costRepository.update({ id }, updateCostControlDto);
  }

  async remove(id: number) {
    return await this.costRepository.delete(id);
  }
}
