import { BadRequestException, Controller, Get, Req, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async checkUserExistence(@Req() req: any) {
    const id = parseInt(req['keyToken'].userid);
    const googleid = req['keyToken'].googleid;

    if (!id || !googleid) {
      throw new BadRequestException(
        `Chaves não encontradas durante o processo.`,
      );
    }

    return await this.userService.checkUserExistence(id, googleid);
  }

  @Get('')
  async getUserInfos(@Req() req: any) {
    const id = parseInt(req['keyToken'].userid);
    const googleid = req['keyToken'].googleid;

    if (!id || !googleid) {
      throw new BadRequestException(
        `Chaves não encontradas durante o processo.`,
      );
    }

    return await this.userService.getUserInfos(id, googleid);
  }
}
