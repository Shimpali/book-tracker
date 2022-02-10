import { env } from './.env';

export const environment = {
  production: true,
  version: env['npm_package_version'],
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES', 'fr-FR'],
};
