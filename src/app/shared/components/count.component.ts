import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  standalone: true,
  template: `
    <div class="cart-item-quantity">
      <button class="plus" (click)="decrement()">+</button>
      <span>{{ count }}</span>
      <button (click)="increment()">-</button>
    </div>
  `,
  imports: [],
  styles: `
  .cart-item-quantity {
  display: flex;
  gap: 10px;
  align-items: center;
  width:100%;
  justify-content:end;
}
  .cart-item-quantity button {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  cursor: pointer;
  border: none;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
}
.plus {
  background-color: rgb(2, 2, 255) !important;
}
.cart-item-quantity button:hover {
  opacity: 0.8;
}
.cart-item-quantity span {
  font-size: 14px;
  color: gray;
}
.cart-item-price .all-price {
  color: gray;
  font-weight: 600;
}
  `,
})
export class CountComponent {
  @Input() count = 0;

  @Output() countChange = new EventEmitter<number>();

  decrement(): void {
    this.count++;
    this.countChange.emit(this.count);
  }
  increment(): void {
    this.count--;
    this.countChange.emit(this.count);
  }
}
