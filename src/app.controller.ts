import {Body, Controller, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('analyze')
  async analyze(@Body('code') code: string) {
    return this.appService.analyze(code);
  }
}
