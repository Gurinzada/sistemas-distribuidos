import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from "dotenv";
import { User } from './user/entities/user.entity';
dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: String(process.env.HOST),
      port: Number(process.env.PORT_DATA_BASE),
      username: String(process.env.USERNAME),
      database: String(process.env.DATE_BASE_NAME),
      entities: [User],
      synchronize: true
    }),
    UserModule
  ],
  controllers:[],
  providers:[],
})
export class AppModule {}
