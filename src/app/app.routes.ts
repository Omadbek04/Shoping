import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu', // Agar path bosh bo'lsa, "menu" ga yo'naltiradi
    pathMatch: 'full', // "full" bilan to'liq mos bo'lishini tekshiradi
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
];
