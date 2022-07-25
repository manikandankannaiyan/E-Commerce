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
  n=1
  single_data:any;
  price:any

  constructor(private service:FakeApiService,private route:ActivatedRoute,private modeldata:fakeapidata) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data:any)=>{
      this.single_data=JSON.parse(data.data)
      console.log(this.single_data);
    })
    
    this.service.getdata().subscribe((data:any)=>{
      this.apidata = data;    
      this.filterCategory = data;
    })

    this.price=this.single_data.price ;
    console.log(this.price);
  }

  // filter(category:string){
  //   this.filterCategory = this.apidata
  //   .filter((a:any)=>{
  //     if(a.category == category || category==''){
  //       return a;
  //     }
  //   })
  // }

  select(data:any){
    console.log(data)
    this.single_data=data;
    this.price=data.price;
    this.n=1
  }

  increament(){
    
    this.n+=1;
    this.price+=this.price
  }
  decreament(){
    if(this.n>1){
      this.n-=1;
      this.price=this.single_data.price*this.n;
    }
  }
  savewishlist(){
    this.modeldata.savewish(this.single_data);
  }
  savecartlist(){
    this.modeldata.savecart(this.single_data);
  }
}
