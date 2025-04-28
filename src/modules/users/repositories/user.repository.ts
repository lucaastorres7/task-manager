import {
  CreateUserDTO,
  UserCreatedDTO,
  UsernameAndEmail,
} from '../dto/users.dto';

export abstract class IUserRepository {
  abstract findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreatedDTO | null>;

  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO>;

  abstract findByUsername(username: string): Promise<UserCreatedDTO | null>;
}
