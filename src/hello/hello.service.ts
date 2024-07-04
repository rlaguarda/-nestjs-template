import {Injectable } from '@nestjs/common';



@Injectable()
export class HelloService {

    constructor() {}
    
    getHello(): string {
      return 'Hello world from nestjs!';
    }

}
