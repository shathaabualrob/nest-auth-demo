import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authServices: AuthService){
        super();
    }

    async validate (username: string, password: string): Promise<any>{
        const user = this.authServices.validateUser(username, password);
        console.log("inside local.startey validate()");
        if(!user){
            console.log("inside local.startey user is NOT validated");
            throw new UnauthorizedException;
        }
        console.log("inside local.startey user is validated");
        return user;

    }

}