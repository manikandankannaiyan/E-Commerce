import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
