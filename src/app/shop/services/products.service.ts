import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { IProduct } from 'src/app/store/interfaces/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  constructor() {}

  public async getProducts(): Promise<IProduct[]> {
    const { data, error } = await this.supabase.from('products').select();

    if (error) throw new Error('Ha ocurrido un error: ' + error);

    return data.map((item) => {
      return { ...item, name: item.title, price: item.selling_price };
    }) as IProduct[];
  }

  public async getProductById(productId: string): Promise<IProduct> {
    const { data, error } = await this.supabase
      .from('products')
      .select()
      .eq('id', productId);

    if (error) throw new Error('Ha ocurrido un error: ' + error);

    return data.map((item) => {
      return { ...item, name: item.title, price: item.selling_price };
    })[0] as IProduct;
  }
}
