import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

  async checkUserExistence(id:number, googleid:string){
    const exist = await this.userRepository.findOne({
        where:{
            id,
            googleid
        }
    });
    if(!exist){
        throw new NotFoundException(`Usuário não encontrado`);
    }

    return {userExist: true}
  }

  async getUserInfos(id:number, googleid:string){
    const response = await this.userRepository.findOne({
        where:{
            id,
            googleid
        }
    });

    if(!response){
        throw new NotFoundException(`Usuário não encontrado`)
    }

    return response;
  }
}
