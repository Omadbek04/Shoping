import { Component, inject } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { MenuService } from './services/menu.services';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ItemComponent],
  template: `
    <div class="main-container">
      @for (item of MenuService.items; track item.id) {
      <app-item [item]="item"></app-item>
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
}
