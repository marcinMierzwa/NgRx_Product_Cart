import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatBadgeModule, MatBadgeSize  } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [RouterLink, MatBadgeModule , MatIconModule],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss'
})
export class CartIconComponent {

  matBadgeSize = input.required<MatBadgeSize>();
  itemCount = 3;
  isItemCountZero = false;
 
}
