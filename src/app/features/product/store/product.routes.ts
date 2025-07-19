import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import * as productEffects from './product.effects';
import { productFeature } from './product.reducer';
import { MainComponent } from '../../../layout/main/main.component';


export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Home',
    // from store
    providers: [
      provideState(productFeature),
      provideEffects(productEffects),
    ],
  },
  // In future you may add for example /home/details/:id
];