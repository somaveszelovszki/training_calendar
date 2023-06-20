import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingsModule } from './trainings/trainings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.server.env' }),
    MongooseModule.forRoot(process.env.DATABASE_URL, { dbName: 'training_calendar' }),
    TrainingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
