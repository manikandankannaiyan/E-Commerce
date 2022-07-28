import { Component,OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  n:number=0;
  cartlist:any;
  price:number=0;
  standardprice:any;
  notify:any;
  totalamount:number=0;
  amount:number=0;
  singleprice:number=0;
  constructor(private api:fakeapidata) { }

  ngOnInit(): void {
    this.cartlist=this.api.carttemp;
    
    for(let item of this.cartlist){
      this.totalamount=this.totalamount+item.price;       
    }
    this.notify=this.cartlist.length;    
    this.amount=this.totalamount;
    
  }

  increament(item:any){
    var id=item.id;

    for(let list of this.cartlist){
      if(list.id==id){
        this.standardprice=list.price/list.addcount;
        this.singleprice=list.price;        
      } 
    }

    if (this.n==0 || this.n < 1) {
      this.n = 1;
    } 

    this.n++;
      let currunttotal=this.n*this.standardprice;
      this.amount=this.amount-this.singleprice;
      

    if(item.addcount<item.stock){      
      item.addcount++;
      item.price=this.standardprice*item.addcount;
      this.amount=this.amount+currunttotal;
    }
    
  }
  decreament(item:any){
    var id=item.id;

    for(let list of this.cartlist){
      if(list.id==id){
        this.standardprice=list.price/list.addcount;
        this.singleprice=list.price;        
      } 
    }
    if (this.n ==0 || this.n < 1) {
      this.n = 1;
    }
    this.n--;
    let currunttotal=this.n*this.standardprice;
    this.amount=this.amount-this.singleprice;

      item.addcount--;
    
      item.price=this.standardprice*item.addcount;
      this.amount=this.amount+currunttotal;
  }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  removeitem(item: any){
    this.api.removeitemcart(item);
  }

  checkout(){
    alert('Total Amount:'+this.amount,)
  }
}
