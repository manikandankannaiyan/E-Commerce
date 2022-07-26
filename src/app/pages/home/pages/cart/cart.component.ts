import { Component, OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  price!:number;
  n:any;
  cartlist:any;

  constructor(private api:fakeapidata) { }

  ngOnInit(): void {
    this.cartlist=this.api.wishtemp;

    this.price=this.cartlist.price ;
    this.n=this.cartlist.addcount;
  }

  increament(){
    if (isNaN(this.n) || this.n < 1) {
      this.n = 1;
    }
    this.n++;
    this.price=this.cartlist.price*this.n
   
  }
  decreament(){
    if (isNaN(this.n) || this.n < 1) {
      this.n = 1;
    }
    this.n--;
    this.price=this.cartlist.price*this.n
  }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  removeitem(item: any){
    this.api.removeitem(item);
  }
}
