import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class HealthService {
  getAppVersion(): string {
    let appVersion = '';

    try {
      appVersion = JSON.parse(readFileSync('./package.json', 'utf-8'))?.version ?? '';
    } catch (error) {
      throw new Error((error as Error).message);
    }

    return appVersion;
  }
}
