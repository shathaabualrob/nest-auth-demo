import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthentictedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)//works using passport-local
  @Post('login')
  login(@Request() req):any{
    console.log("inside app.controller in login()");
    // return{msg: 'Logged In !'}
    return this.authService.login(req.user);//return JWT access token
  }

  // @UseGuards(AuthentictedGuard) //for sessions
  @UseGuards(JwtAuthGuard)//workes using jwt-startegy
  @Get('protected')
  getHello(@Request() req): string { 
    return req.user;
  }
}
