import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import * as productEffects from './product.effects';
import { MainComponent } from '../../../layout/main/main.component';


export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Home',
    // from store
    providers: [
      provideEffects(productEffects),
    ],
  },
  // In future you may add for example /home/details/:id
];