import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar>
    <router-outlet></router-outlet>
  </app-navbar>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
}
