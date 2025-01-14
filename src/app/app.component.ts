import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shop/components/footer/footer.component';
import { NavbarComponent } from './shop/components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [
        `
      .view-wrapper {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
      }
    `,
    ],
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  constructor() {}
}
