import { Component, computed, inject, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../../features/cart/cart.service';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [RouterLink, MatBadgeModule, MatIconModule, MatButtonModule],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss'
})
export class CartIconComponent {
  cartService = inject(CartService);
  itemCount = this.cartService.itemCount;
  isItemCountZero = this.cartService.isItemCountZero;
 
}
