import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/home/pages/shop/shop.component';
import { ProductDetailsComponent } from './pages/home/pages/product-details/product-details.component';
import { WishlistComponent } from './pages/home/pages/wishlist/wishlist.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { RatingModule, RatingConfig } from 'ngx-bootstrap/rating';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatRippleModule } from '@angular/material/core';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/home/pages/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { ProductShopComponent } from './pages/product-shop/product-shop.component';
import {MatSliderModule} from '@angular/material/slider';
import { FooterComponent } from './components/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { fakeapidata } from './model/fake-api-data';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ProductDetailsComponent,
    WishlistComponent,
    CheckoutComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    ProductShopComponent,
    FilterPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlickCarouselModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    RatingModule,
    CarouselModule,
    MatRippleModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [RatingConfig,fakeapidata],
  bootstrap: [AppComponent]
})
export class AppModule { }
