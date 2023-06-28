import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingsModule } from './trainings/trainings.module';
import { TrainingSessionsModule } from './training_sessions/training_sessions.module';
import { GymsModule } from './gyms/gyms.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.server.env' }),
    MongooseModule.forRoot(process.env.DATABASE_URL, { dbName: 'training_calendar' }),
    GymsModule,
    TrainingsModule,
    TrainingSessionsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
