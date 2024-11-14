import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  //   @Public()
  status(@Res() res: Response): void {
    res.json({
      status: HttpStatus.OK,
      version: this.healthService.getAppVersion(),
    });
  }
}
