import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import AuthController from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "src/user/user.service";
import { GoogleStategy } from "src/strategies/google.strategies";


@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers:[AuthService, UserService, GoogleStategy]
})

export class AuthModule{}