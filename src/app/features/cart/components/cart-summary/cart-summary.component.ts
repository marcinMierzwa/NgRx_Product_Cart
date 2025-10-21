import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartSummaryDetails } from '../../store/cart.state';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss',
})
export class CartSummaryComponent {
  private readonly notificationService = inject(NotificationService);

  @Input({ required: true }) summary$!: Observable<CartSummaryDetails>;
  @Output() clearCart = new EventEmitter<void>();

  readonly message =
    'Thank you for shopping at our store. Your order has been forwarded for processing!';

  protected onBuyNow(): void {
    const message = this.message;
    this.notificationService.showInfo(message);
    this.clearCart.emit();
  }
}
