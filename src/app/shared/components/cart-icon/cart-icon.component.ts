import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatBadgeModule, MatBadgeSize  } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [RouterLink, MatBadgeModule , MatIconModule, AsyncPipe],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss'
})
export class CartIconComponent {

  @Input({ required: true }) itemsCount$!: Observable<number>;
  @Input({ required: true }) matBadgeSize!: MatBadgeSize;
  isItemCountZero = false;
} 