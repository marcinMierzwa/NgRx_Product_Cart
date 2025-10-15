import { Component } from '@angular/core';
import { CartProductsListComponent } from "../cart-products-list/cart-products-list.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartProductsListComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

}
