import { Injectable } from "@nestjs/common"
import { PassportSerializer, PassportStrategy } from "@nestjs/passport"


@Injectable()
export class SessionSerializer extends PassportSerializer{
    serializeUser(user: any, done: (err: Error, user: any) => void):any {
        done(null, user);
        done(null, {id: user.id});
    }
    deserializeUser(payload: any, done: (err: Error, user: any) => void):any {
        // const user = this.userService.findById(payload.id)
        done(null, payload);
    }
}