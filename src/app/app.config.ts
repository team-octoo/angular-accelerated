import { ApplicationConfig, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { APP_ROUTES } from './app.routes';
import { loadConfigFactory } from './shared/feature-config';
import { authorizationInterceptor } from './shared/feature-authorization';

export const APP_CONFIG: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptors([authorizationInterceptor])),
        provideRouter(APP_ROUTES),
        provideAppInitializer(loadConfigFactory()),
    ],
};
