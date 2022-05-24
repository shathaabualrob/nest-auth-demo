import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor( 
        private usersService : UsersService,
        private jwtService: JwtService
        ){};

    async validateUser( username: string, password: string): Promise<any>{
        const user = await this.usersService.findOne(username);

        if(user && user.password === password){
            const { username, password, ...rest} = user;
            console.log("inside auth.services using ValidateUser() => user is validated");
            
            return rest;
        }
        console.log("inside auth.services using ValidateUser() => user is NOT validated");
        return null;    

    }
    async login (user: any){
        const payload = {name: user.name, sub: user.id};

        return{
            access_token: this.jwtService.sign(payload),
        }
    }
}
