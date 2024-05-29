import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { taskModel } from './tasks.model';
import { createTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  getAllTasks(): { taskData: taskModel[]; status: number } {
    return this.taskservice.getAllTasks();
  }
  @UsePipes(ValidationPipe)
  @Post()
  createTask(@Body() createTaskDt: createTaskDto): {
    task: taskModel;
    status: number;
  } {
    return this.taskservice.createTask(createTaskDt);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): { tskmdl?: taskModel; status: number } {
    return this.taskservice.getTaskById(id);
  }
  @Get('/delete/:id')
  deactiveTaskById(@Param('id') id: string): { status: number } {
    return this.taskservice.deactiveTaskById(id);
  }

  @Patch('/:id')
  updateTaskById(
    @Param('id') id: string,
    @Body() createtskdto: createTaskDto,
  ): void {
    this.taskservice.updateTaskById(id, createtskdto);
  }
}
