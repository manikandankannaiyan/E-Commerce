import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { fakeapidata } from 'src/app/model/fake-api-data';
import { FakeApiService } from 'src/app/service/fake-api.service';

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
  price:any

  constructor(private service:FakeApiService,private route:ActivatedRoute,private api:fakeapidata) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data:any)=>{
      this.single_data=JSON.parse(data.data)
      console.log(this.single_data);
    })
    
    this.apidata=this.api.datalist;
    this.filterCategory=this.api.datalist;  
    // this.service.getdata().subscribe((data:any)=>{
    //   this.apidata = data;    
    //   this.filterCategory = data;
    // })

    this.price=this.single_data.price ;
    this.n=this.single_data.addcount;
  }

  // filter(category:string){
  //   this.filterCategory = this.apidata
  //   .filter((a:any)=>{
  //     if(a.category == category || category==''){
  //       return a;
  //     }
  //   })
  // }

  selectproduct(data:any){
    console.log(data)
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
}
