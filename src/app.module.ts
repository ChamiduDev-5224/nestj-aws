import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AdminsModule } from './admins/admins.module';
@Module({
  imports: [TasksModule,
    TypeOrmModule.forRoot(typeormConfig),
    AdminsModule

  ],
  controllers: [AppController, TasksController, UsersController],
  providers: [AppService, TasksService, UsersService],
})
export class AppModule {}
