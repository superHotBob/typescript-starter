import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Hello Bob!</h1>`;
  }
  getBy(): string {
    return `<h1>Good by Bob!</h1>`;
  }
}
