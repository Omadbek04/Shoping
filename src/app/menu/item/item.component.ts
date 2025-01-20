import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Item } from '../interface/items';
import { CommonModule, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatIconModule,CurrencyPipe,CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: Item;
}
