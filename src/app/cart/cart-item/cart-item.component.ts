import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CountComponent } from '../../shared/components/count.component';
import { ICartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe, CountComponent, CountComponent, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item!: ICartItem;
  ngOnInit(): void {
    // console.log(this.item);
  }
}
