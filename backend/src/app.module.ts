import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user/entities/user.entity';
import { CostControlModule } from './cost-control/cost-control.module';
import { QualityControlModule } from './quality-control/quality-control.module';
dotenv.config();

@Module({
  // imports: [
    // TypeOrmModule.forRoot({
    //   type:"mysql",
    //   host: String(process.env.HOST),
    //   port: Number(process.env.PORT_DATA_BASE),
    //   username: String(process.env.USERNAME),
    //   password: String(process.env.PASSWORD),
    //   database: String(process.env.DATE_BASE_NAME),
    //   entities:[User],
    //   synchronize:true
    // }),
    // UserModule, AuthModule],
  controllers: [],
  providers: [],
  imports: [CostControlModule, QualityControlModule],
})

export class AppModule {}
