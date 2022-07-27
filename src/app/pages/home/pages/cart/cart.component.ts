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
  totalprice:number=0;
  price:number=0;
  standardprice:any;
  @Output() notification :EventEmitter<string>= new EventEmitter(); 
  notify:any;
  constructor(private api:fakeapidata) { }

  ngOnInit(): void {
    this.cartlist=this.api.carttemp;
    
    for(let item of this.cartlist){
      this.totalprice=this.totalprice+item.price;

      this.price=item.price;
      this.n=item.addcount;
      this.standardprice=item.price/item.addcount;
      
    }
    this.notify=this.cartlist.length;
    
  }
  sendValues(){  
    this.notification.emit(this.notify);  
 }

  increament(){
    if (this.n==0 || this.n < 1) {
      this.n = 1;
    } 
    this.n++;
    this.price=this.standardprice*this.n;    
    this.totalprice=this.price;
   
  }
  decreament(){
    if (this.n ==0 || this.n < 1) {
      this.n = 1;
    }
    this.n--;
    this.price=this.standardprice*this.n;
    this.totalprice=this.price;
  }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  removeitem(item: any){
    this.api.removeitemcart(item);
  }

}
