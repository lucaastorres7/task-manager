import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user';
import { CreateUserDTO } from './dto/users.dto';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.execute(data);
  }
}
