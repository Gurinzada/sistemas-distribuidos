import { Injectable } from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport"
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { AuthService } from "src/auth/auth.service";


@Injectable()
export class GoogleStategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly authService: AuthService){
        super({
            clientID: process.env.ID_CLIENT_GOOGLE,
            clientSecret: process.env.SECRET_KEY_GOOGLE,
            callbackURL: process.env.CALLBACK_URL_GOOGLE,
            scope: ['email', 'profile']
        });
    }

    async validate(accessToken:string, refresehToken:string, profile:any, done: VerifyCallback): Promise<any> {
        const user = await this.authService.validateUser(profile);
        console.log(user);
        return done(null, user)
    }
}