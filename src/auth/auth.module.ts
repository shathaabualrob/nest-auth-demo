import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.startegy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UsersModule,PassportModule, JwtModule.register({
    secret: 'SECRET', //put in .env variables
    signOptions: {expiresIn: '60s'},

  })],// for sessions use: PassportModule.register({session: true})
  providers: [AuthService, LocalStrategy, JwtStrategy],// for sessions add SessionSerializer too
  exports: [AuthService],
})
export class AuthModule {}
