import { Component } from '@angular/core';
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";
import { CartProductItemCardComponent } from "../cart-product-item-card/cart-product-item-card.component";

@Component({
  selector: 'app-cart-products-list',
  standalone: true,
  imports: [CartSummaryComponent, CartProductItemCardComponent],
  templateUrl: './cart-products-list.component.html',
  styleUrl: './cart-products-list.component.scss'
})
export class CartProductsListComponent {

}
