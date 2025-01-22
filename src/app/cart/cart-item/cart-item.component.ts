import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CountComponent } from '../../shared/components/count.component';
import { ICartItem } from '../models/cart-item';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe, CountComponent, CountComponent, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item!: ICartItem;
  cartItems = inject(CartService);

  removeItem(id: string): void {
    const currentItems = this.cartItems.cartItems$.getValue();
    const updatedItems = currentItems.filter((item) => item.id !== id);
    this.cartItems.cartItems$.next(updatedItems);
  } 
  
}
