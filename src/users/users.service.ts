import { Injectable,  } from '@nestjs/common';
import { userCreateDto } from './dto/user.create.dto';

@Injectable()
export class UsersService {
  getUsers(): { no: number } {
    const newno = 10;

    return { no: newno };
  }
  createUsers(userCreatedto: userCreateDto): { status: boolean } {
    const { id, name, email } = userCreatedto;
    console.log(id, name, email);
    return { status: true };
  }
}
