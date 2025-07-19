import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { metaReducers } from './store/meta-reducers';
import * as errorHandlingEffects from './store/effects/error-handling.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore({}, { metaReducers }),
    provideEffects([errorHandlingEffects ]),
    isDevMode()
      ? provideStoreDevtools({
          maxAge: 25,
          logOnly: false,
        })
      : [], provideAnimationsAsync(),
  ]
};
