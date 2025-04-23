import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDTO } from '../users/dto/users.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform(
    { name, email, username, password }: CreateUserDTO,
    metadata: ArgumentMetadata,
  ) {
    if (!name || !email || !username || !password) {
      throw new HttpException(
        `All fields must be filled`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return {
      name,
      email,
      username,
      password,
    };
  }
}
