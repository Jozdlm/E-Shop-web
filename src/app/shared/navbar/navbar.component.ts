import { Component, inject } from '@angular/core';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { CommonModule } from '@angular/common';
import { WishlistDropdownComponent } from './wishlist-dropdown/wishlist-dropdown.component';
import { RouterModule } from '@angular/router';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CartDropdownComponent,
    SearchInputComponent,
    WishlistDropdownComponent,
    UserDropdownComponent,
  ],
})
export class NavbarComponent {
  private _authService: AuthService = inject(AuthService);
  private _appService: AppService = inject(AppService);

  public businessName: string  = '';
  public user = this._authService.user;

  constructor() {
    this._appService.getBusinessInfo()
      .then(value => this.businessName = value?.name || '');
  }
}
