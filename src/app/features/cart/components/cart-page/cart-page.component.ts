import { Component } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartItemComponent, CartSummaryComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

}
