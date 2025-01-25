import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class TokenService implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: Error | any) => void) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      res.redirect(`${process.env.FRONTEND_ADDRESS}/`);
    }
    try {
      const decoded: any = jwt.verify(token, process.env.SECRET);
      req['keyToken'] = {
        userid: decoded.userid,
        googleid: decoded.googleid,
      };
      next();
    } catch {
      res.redirect(`${process.env.FRONTEND_ADDRESS}/`);
    }
  }
}
