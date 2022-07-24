import { Component, OnInit } from '@angular/core';
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
  n=0

  constructor(private service:FakeApiService) { }

  ngOnInit(): void {
    this.service.getdata().subscribe((data:any)=>{
      this.apidata = data;    
      this.filterCategory = data;
      console.log(data);  
    })
  }

  filter(category:string){
    this.filterCategory = this.apidata
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
