import { Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import * as jwt from "jsonwebtoken"


@Controller("auth")
export default class AuthController{
    constructor(){}

    @Post("google")
    @UseGuards(AuthGuard('google'))
    async googleLogin(){}

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleCallback(@Req() req, @Res() res: Response){
        const user = req.user;

        const googleId = user.googleid;
        
        if(!googleId){
            return res.redirect(`${process.env.FRONTEND_ADDRESS}/`);
        }

        const token = jwt.sign(
            {googleid: googleId, userid: user.id},
            process.env.SECRET_JWT,
            {expiresIn: 86400}
        );

        return res.redirect(
            `${process.env.FRONTEND_ADDRESS}?userid=${token}`
        )
    }
}