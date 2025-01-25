import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    async validateUser(profile:any){
        console.log(profile)
        const {id: googleId, displayName, emails} = profile;
        const email = emails[0]?.value

        const alreadyExist = await this.userRepository.findOne({
            where:{
                googleid: googleId
            }
        });

        if(alreadyExist){
            return alreadyExist;
        }

        const newUser = this.userRepository.create({
            googleid: googleId,
            email,
            username: displayName,
        });

        return await this.userRepository.save(newUser);
    }
}