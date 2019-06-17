import { Injectable } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  '../user/user.service';
import { User } from  '../user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }
    private async validate(userData: User): Promise<User> {
        console.log(userData)
        return await this.userService.findOne(userData);
    }

    public async login(user: User): Promise< any | { status: number }>{
        return this.validate(user).then((userData)=>{
          if(!userData){
            return { status: 404 };
          }
          let payload = `${userData.name}${userData.id}`;
          const accessToken = this.jwtService.sign(payload);
          return {
             expires_in: 3600,
             access_token: accessToken,
             user_id: payload,
             status: 200
          };

        });
    }

    public async register(user: User): Promise<any>{
        console.log(user)
        return this.userService.create(user)
    }
}
