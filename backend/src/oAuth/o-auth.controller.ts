import { Controller, Post, Req } from '@nestjs/common';

@Controller('oAuth')
export default class AuthController {
  constructor() {}

  @Post('user')
  async googleCallback(@Req() req) {
    console.log(req);
  }
}
