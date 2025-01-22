import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Item } from '../interface/items';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ICartItem } from '../../cart/models/cart-item';
import { CountComponent } from '../../shared/components/count.component';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CurrencyPipe,
    CommonModule,
    CountComponent,
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  public showCount: boolean = false;

  private _items!: ICartItem;

  @Input() set item(value: Item) {
    this._items = { ...value, count: 0 };
  }
  get item(): ICartItem {
    return this._items;
  }

  @Output() onCountClick = new EventEmitter<ICartItem>();

  addToCard(): void {
    this.showCount = true;
    this._items.count += 1;
    this.onCountClick.emit(this.item);
  }
  onCountChange(): void {
    this.onCountClick.emit(this.item);
  }
}
