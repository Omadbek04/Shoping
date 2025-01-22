import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems$ = new BehaviorSubject<ICartItem[]>([]);
}
