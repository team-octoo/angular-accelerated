import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_CONFIG } from './app/app.config';
import { enableProfiling } from '@angular/core';

// enableProfiling();

bootstrapApplication(AppComponent, APP_CONFIG).catch((err) =>
    console.error(err),
);
