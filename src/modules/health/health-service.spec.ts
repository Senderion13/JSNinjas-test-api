import { HealthService } from './health.service';

describe('Health', () => {
  let healthService: HealthService;
  beforeEach(() => {
    healthService = new HealthService();
  });

  it('should get project version', async () => {
    const mockResult = /^\d+\.\d+\.\d+$/;
    const result = await healthService.getAppVersion();
    expect(result).toMatch(mockResult);
  });
});
