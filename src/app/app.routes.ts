import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import{MenuComponent} from "./menu/menu.component"

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'menu',
    component:MenuComponent ,
  },
];
