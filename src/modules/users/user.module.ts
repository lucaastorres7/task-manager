import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserController } from './user.controller';
import { IUserRepository } from './repositories/user.repository';
import { UserPrismaRepository } from './repositories/prisma/user.prisma.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
