import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): string {
    return this.appService.getHealth();
  }
  @Get('/health/ready')
  getReady(): string {
    return this.appService.getHealth();
  }
}
