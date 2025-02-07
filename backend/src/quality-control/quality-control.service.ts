import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQualityControlDto } from './dto/create-quality-control.dto';
import { UpdateQualityControlDto } from './dto/update-quality-control.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, catchError } from 'rxjs';
import { AxiosError } from 'axios';
import { QualityControl } from './entities/quality-control.entity';


export interface ResponseAPI {
  message: string,
  status_code: number
}

@Injectable()
export class QualityControlService {
  constructor(
    @InjectRepository(QualityControl)
    private qualityRepository: Repository<QualityControl>,
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

  async create(createQualityControlDto: CreateQualityControlDto) {
    const data = this.qualityRepository.create(createQualityControlDto);

    // Save database
    await this.qualityRepository.save(data);
    
    return true
    return await this.fetchAPI(data);
  }

  async findAll() {
    const inputs = await this.qualityRepository.find();

    if (!inputs) throw new NotFoundException('Nenhuma entrada encontrada');

    return inputs;
  }

  async findOne(id: number) {
    const input = await this.qualityRepository.findOneBy({ id });

    if (!input) throw new NotFoundException(`Entrada id:${id} não encontrado`);
    
    return input;
  }

  async update(id: number, updateQualityControlDto: UpdateQualityControlDto) {
    return await this.qualityRepository.update({ id }, updateQualityControlDto);
  }

  async remove(id: number) {
    return await this.qualityRepository.delete(id);
  }
}
