import { Injectable } from '@nestjs/common';

export class User{
    id: number;
    name: string;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    public readonly users : User[] = [
        {
            id: 1,
            name: "sam",
            username: "sam",
            password: "sam123"
        },
        {
            id: 2,
            name: "clover",
            username: "clover",
            password: "clover123"
        },
        {
            id: 3,
            name: "alex",
            username: "alex",
            password: "alex123"
        },
        {
            id: 1,
            name: "martin",
            username: "martin",
            password: "martin123"
        }
    ];

    async findOne(username:string): Promise<User | undefined> {
        console.log("inside users.services using findOne()");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        return this.users.find(user => user.username === username);
        
    }
}
