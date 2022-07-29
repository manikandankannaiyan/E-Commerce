import { Component,OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total_pro:number=0;
  cartlist:any;
  standardprice:any;
  notify:any;
  totalamount:number=0;
  singleprice:number=0;
  mincount=1;


  constructor(private api:fakeapidata) { }

  ngOnInit(): void {
    this.cartlist=this.api.carttemp;
    
    for(let item of this.cartlist){
      this.totalamount=this.totalamount+item.price;  
      this.total_pro=this.total_pro+item.addcount;
    }
    this.notify=this.cartlist.length;    
      
  }

  increament(item:any){
    var id=item.id;
    this.total_pro++;

    for(let list of this.cartlist){
      if(list.id==id){
        this.standardprice=list.price/list.addcount;
      }
    }
    if(item.addcount<item.stock){      
      item.addcount++;
      item.price=this.standardprice*item.addcount;
      this.totalamount=this.totalamount+this.standardprice;
    }
  }
  decreament(item:any){
    var id=item.id;
    if (this.mincount<this.total_pro) {
      this.total_pro--;
    }

    for(let list of this.cartlist){
      if(list.id==id){
        this.standardprice=list.price/list.addcount;
      } 
    }
      if(this.mincount<item.addcount){
        item.addcount--;
      item.price=this.standardprice*item.addcount;
      this.totalamount=this.totalamount-this.standardprice;
      }
  }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  removeitem(item: any){    
    this.api.removeitemcart(item.id);
    this.totalamount=this.totalamount-item.price;
    this.total_pro=this.total_pro-item.addcount;
  }

  checkout(){
    Swal.fire({
      icon:'success',
      position: 'center',
      title:'Your payment successfull',
      text:'Total Amount: '+this.totalamount+' Rs.',
    })
  }
}
