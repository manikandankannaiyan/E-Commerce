import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeapidata } from 'src/app/model/fake-api-data';
import { FakeApiService } from 'src/app/service/fake-api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  apidata:any;
  filterCategory:any;
  searchKey:string ="";
  centered = false;
  n:any;
  single_data:any;
  single:any;
  price:any;
  Size:any;
  cartlist:any;

  constructor(private service:FakeApiService,private route:ActivatedRoute,private api:fakeapidata) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data:any)=>{
      this.single_data=JSON.parse(data.data)
      this.single=JSON.parse(data.data)
    })
    this.cartlist=this.api.carttemp;
    this.apidata=this.api.datalist;
    this.filterCategory=this.api.datalist;  

    this.price=this.single_data.price ;
    this.n=this.single_data.addcount;

    this.api.search.subscribe((val:any)=>{      
      this.searchKey = val;
    })
  }

  selectproduct(data:any){
    this.single_data=data;
    this.price=data.price;
    this.n=1
  }

  increament(){
    if (isNaN(this.n) || this.n < 1) {
      this.n = 1;
    }
    this.n++;
    this.price=this.single_data.price*this.n;
   
  }
  decreament(){
    if (isNaN(this.n) || this.n < 1) {
      this.n = 1;
    }
    this.n--;
    this.price=this.single_data.price*this.n;
  }
  
  savewishlist(){
    this.single_data.price=this.price;
    this.single_data.addcount=this.n;
    this.api.savewish(this.single_data);
  }
  savecartlist(){
    this.single_data.price=this.price;
    this.single_data.addcount=this.n;    
    this.api.savecart(this.single_data);
  }
  imgchange(data:any){
    this.single_data.image.img1=data;
  }

  color(data:any){
    this.single_data.color=data;
  }

  
  size(data:any){
    this.Size=data;
  }

  alertcart(){
   
  }
  alertwish(){
    
  }
}
