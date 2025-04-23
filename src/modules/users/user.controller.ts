import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user';
import { CreateUserDTO } from './dto/users.dto';
import { CreateUserValidationPipe } from '../pipe/create-user.validation';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.execute(data);
  }
}
