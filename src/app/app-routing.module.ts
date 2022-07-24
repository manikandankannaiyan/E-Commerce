import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/home/pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/home/pages/product-details/product-details.component';
import { ShopComponent } from './pages/home/pages/shop/shop.component';
import { WishlistComponent } from './pages/home/pages/wishlist/wishlist.component';
import { ProductShopComponent } from './pages/product-shop/product-shop.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'pro-shop',component:ProductShopComponent},
  {path:'footer',component:FooterComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
