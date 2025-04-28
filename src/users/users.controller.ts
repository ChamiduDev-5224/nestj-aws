import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { userCreateDto } from './dto/user.create.dto';

@Controller('users')
export class UsersController {
  constructor(private UsersServices: UsersService) {}

  @Get()
  getallUsers(): { no: number } {
    try {
      return this.UsersServices.getUsers();
    } catch (error) {
      throw error;
    }
  }

  @Post()
  create(@Body() userCreatedto: userCreateDto) {
    this.UsersServices.createUsers(userCreatedto);
  }
}
