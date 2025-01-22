import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ICartItem } from './models/cart-item';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CurrencyPipe,
    CommonModule,
    MatDividerModule,
    CartItemComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  items: ICartItem[] = [];

  get total() {
    return this.items.reduce((acc, item) => {
      const price = item.count * item.price;
      return acc + price;
    }, 0);
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((data) => {
      this.items = data;
    });
  }
}
