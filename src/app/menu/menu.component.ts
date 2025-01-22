import { Component, inject } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { MenuService } from './services/menu.services';
import { ICartItem } from '../cart/models/cart-item';
import { CartService } from '../cart/service/cart.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ItemComponent],
  template: `
    <div class="main-container">
      @for (item of MenuService.items; track item.id) {
      <app-item [item]="item" (onCountClick)="updateCart($event)" />
      }
    </div>
  `,
  styles: [
    `
      .main-container {
        padding: 40px;
        display: flex;
        justify-content: space-evenly;
        gap: 20px;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class MenuComponent {
  MenuService = inject(MenuService);
  cartService = inject(CartService);
  updateCart(item: ICartItem): void {
    const cartItems$ = this.cartService.cartItems$;
    const newItems = structuredClone(cartItems$.value);
    const avaibleItemsIndex = newItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (avaibleItemsIndex !== -1) {
      newItems[avaibleItemsIndex] = item;
    } else {
      newItems.push(item);
    }
    this.cartService.cartItems$.next(newItems);
  }
}
