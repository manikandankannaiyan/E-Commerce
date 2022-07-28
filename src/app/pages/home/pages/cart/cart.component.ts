import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  n:any;
  cartlist:any;
  price:number=0;
  standardprice:any;
  notify:any;
  totalamount:number=0;
  amount:number=0;
  constructor(private api:fakeapidata) { }

  ngOnInit(): void {
    this.cartlist=this.api.carttemp;
    
    for(let item of this.cartlist){
      this.standardprice=item.price/item.addcount;
      

      this.totalamount=this.totalamount+item.price;
      this.amount=this.totalamount;
    }
    this.notify=this.cartlist.length;    
    
  }

  increament(item:any){
    if (this.n==0 || this.n < 1) {
      this.n = 1;
    } 
    if(item.addcount<item.stock){
      let total=item.price/item.addcount;
    
      item.addcount++;
      this.amount=total*item.addcount;
      item.price=this.amount;
     this.amount=this.totalamount-this.amount;
    console.log(this.amount);
    }
    
  }
  decreament(item:any){
    if (this.n ==0 || this.n < 1) {
      this.n = 1;
    }
    item.addcount--;
    item.price=this.standardprice*item.addcount;
    this.amount=item.price
    console.log(this.amount);
  }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  removeitem(item: any){
    this.api.removeitemcart(item);
  }

  checkout(){
    alert('Total Amount:'+this.cartlist.price,)
  }
}
