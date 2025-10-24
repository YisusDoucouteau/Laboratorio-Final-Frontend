
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(), provideServiceWorker('ngsw-worker.js', 
    {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })],
});
