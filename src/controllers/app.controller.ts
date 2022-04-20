import { Controller, Get } from '@nestjs/common';

interface IHealthCheck{
  status: string
}

@Controller()
export class AppController {

  @Get('/health')
  healthCheck(): IHealthCheck {
    return { status: "RUNNING" };
  }
}
