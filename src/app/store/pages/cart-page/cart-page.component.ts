import { Component, computed, inject } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ICartItem } from '../../interfaces/cart-item';
import { IProduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { ItemCartComponent } from '../../components/item-cart/item-cart.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  standalone: true,
  imports: [CommonModule, ItemCartComponent],
})
export class CartPageComponent {
  private _shoppingCartService = inject(ShoppingCartService);

  public cartItems = this._shoppingCartService.shoppingCart;
  public cartAmmount = this._shoppingCartService.cartAmmount;

  public shoppingCart = computed<ICartItem[]>(() => {
    return this.cartItems().map((item) => {
      return { ...item, subtotal: item.quantity * item.product.price };
    });
  });

  constructor() {}
}
