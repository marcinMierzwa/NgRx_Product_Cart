import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { metaReducers } from './store/meta-reducers';
import * as errorHandlingEffects from './store/effects/error-handling.effects';
import * as categoryEffects from './features/categories/store/category.effects'
import { cartFeature } from './features/cart/store/cart.reducer';
import { productFeature } from './features/product/store/product.reducer';
import { categoryFeature } from './features/categories/store/category.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideHttpClient(),
    provideStore({}, { metaReducers }),
    provideState(productFeature),
    provideState(cartFeature),
    provideState(categoryFeature),
    provideEffects([categoryEffects, errorHandlingEffects]),
    isDevMode()
      ? provideStoreDevtools({
          maxAge: 25,
          logOnly: false,
        })
      : [],
    provideAnimationsAsync(),
  ],
};
