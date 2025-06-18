import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { CartComponent } from './features/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: MainComponent,
        title: 'home'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'cart'
    }
];
