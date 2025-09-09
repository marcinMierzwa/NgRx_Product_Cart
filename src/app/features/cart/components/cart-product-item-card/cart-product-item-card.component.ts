import { Component } from '@angular/core';
import { CartProductQuantityComponent } from "../cart-product-quantity/cart-product-quantity.component";
import { WordLimitPipe } from '../../../../shared/pipes/word-limit.pipe';

@Component({
  selector: 'app-cart-product-item-card',
  standalone: true,
  imports: [CartProductQuantityComponent, WordLimitPipe],
  templateUrl: './cart-product-item-card.component.html',
  styleUrl: './cart-product-item-card.component.scss'
})
export class CartProductItemCardComponent {
  title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, porro? Alias dignissimos, ut iure ratione fugiat nulla, voluptas deleniti velit ipsum ipsa aliquid repellendus aspernatur earum aliquam quis tenetur consequuntur!'
}
