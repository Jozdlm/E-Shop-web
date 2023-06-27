import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICartItem } from '../../../store/interfaces/cart-item';
import { ShoppingCartService } from '../../../store/services/shopping-cart.service';
import { IProduct } from '../../../store/interfaces/product';
import { ProductImageDirective } from 'src/app/common/directives/product-image.directive';

@Component({
  selector: 'app-item-cart',
  standalone: true,
  imports: [CommonModule, ProductImageDirective],
  templateUrl: './item-cart.component.html',
})
export class ItemCartComponent {
  private _cartService = inject(ShoppingCartService);

  @Input({ alias: 'cartItem', required: true })
  public item!: ICartItem;

  public increaseQty(itemId: string): void {
    this._cartService.increaseQuantity(itemId);
  }

  public decreaseQty(itemId: string): void {
    this._cartService.decreaseQuantity(itemId);
  }

  public removeItem(itemId: string): void {
    this._cartService.removeFromCart(itemId);
  }
}