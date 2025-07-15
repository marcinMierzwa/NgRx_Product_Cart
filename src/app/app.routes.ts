import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { CartPageComponent } from './features/cart/components/cart-page/cart-page.component';

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
        component: CartPageComponent,
        title: 'shopping-cart'
    }
];
