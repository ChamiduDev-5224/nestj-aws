import { Injectable, NotFoundException } from '@nestjs/common';
import { taskModel, taskStatus } from './tasks.model';
import { createTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: taskModel[] = [];

  getAllTasks(): { taskData: taskModel[]; status: number } {
    return { taskData: this.tasks, status: 1 };
  }

  createTask(createTaskDto: createTaskDto): {
    task: taskModel;
    status: number;
  } {
    const { name, description } = createTaskDto;

    const newTask: taskModel = {
      id: String(Math.random()),
      name,
      description,
      status: taskStatus.PENDING,
    };

    this.tasks.push(newTask);
    return { task: newTask, status: 1 };
  }

  getTaskById(id: string): { tskmdl?: taskModel; status: number } {
    const found: taskModel = this.tasks.find((val) => {
      return val.id == id;
    });

    if (!found) {
      throw new NotFoundException();
    }
    return { tskmdl: found, status: 1 };
  }

  deactiveTaskById(id: string): { status: number } {
    const found = this.tasks.find((res) => res.id == id);

    if (!found) {
      throw new NotFoundException();
    }
    found.status = taskStatus.DEACTIVE;
    return { status: 1 };
  }

  updateTaskById(id: string, createTaskDt: createTaskDto): void {
    const { name, description } = createTaskDt;
    const found = this.tasks.find((vl) => vl.id == id);

    if (!found) {
      throw new NotFoundException(`Task ID: ${id} is not found.`);
    }
    
    found.name = name;
    found.description = description;
  }
}
