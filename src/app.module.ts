import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { User } from './user/model/user.model';

@Module({
  imports: [
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: process.env.PG_HOST,
    //   port: Number(process.env.PG_PORT) || 5432,
    //   username: process.env.PG_USER,
    //   password: String(process.env.PG_PASSWORD),
    //   database: process.env.PG_DB,
    //   autoLoadModels: true,
    //   logging: false,
    //   models: [User],
    // }),
    // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
