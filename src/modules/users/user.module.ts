import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, PrismaService],
})
export class UserModule {}
