import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO } from './dto/sign-in.dto';
import { SignInUseCase } from './useCases/sign-in';

@Controller()
export class LoginController {
  constructor(private signInUseCase: SignInUseCase) {}

  @Post('signIn')
  async signIn(@Body() data: SignInDTO) {
    const signIn = await this.signInUseCase.execute(data);
    return signIn;
  }
}
