export enum Environments {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  TEST = 'test',
  STAGING = 'staging',
  QA = 'qa',
  DEMO = 'demo',
}

export const NON_PRODUCTION_ENVIRONMENTS = [Environments.TEST, Environments.DEVELOPMENT];

export const DOCUMENTATION_URL = 'https://github.com/repository/blob/main/docs/vars.md';
