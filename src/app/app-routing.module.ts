import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const routes: Routes = [
  {path : 'products',component : ProductsComponent},
  {path : 'product-details', component : ProductDetailsComponent},
  {path : 'cart', component : CartItemsComponent},

  {path : '', redirectTo : '/products', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
