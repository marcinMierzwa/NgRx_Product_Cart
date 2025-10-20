import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartSummaryDetails } from '../../store/cart.state';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss',
})
export class CartSummaryComponent {
  @Input({ required: true }) summary$!: Observable<CartSummaryDetails>;
  readonly message = 'Thank you for shopping at our store. Your order has been forwarded for processing!';
  
  protected onBuyNow(): void {
    alert(this.message);
  }

}
