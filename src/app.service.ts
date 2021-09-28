import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'I am ALIVE! On 7900 or 7800.'
  }
}
