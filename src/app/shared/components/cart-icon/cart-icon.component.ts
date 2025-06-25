import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatBadgeModule, MatBadgeSize  } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../features/cart/cart.service';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [RouterLink, MatBadgeModule , MatIconModule],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss'
})
export class CartIconComponent {
  private readonly cartService = inject(CartService);

  matBadgeSize = input.required<MatBadgeSize>();
  itemCount = this.cartService.itemCount;
  isItemCountZero = this.cartService.isItemCountZero;
 
}
