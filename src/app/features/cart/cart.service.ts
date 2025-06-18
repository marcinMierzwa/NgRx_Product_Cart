import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  itemCount = signal<number>(1);
  isItemCountZero = computed(() => {
    let itemCount = this.itemCount();
    return itemCount === 0 ? true : false;
  });
}
