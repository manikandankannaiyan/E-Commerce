import { Component, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/service/fake-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor( private service:FakeApiService) { }

  apidata:any;
  filterCategory:any;
  searchKey:string ="";
  centered = false;
  s_max=1000;
  s_min=10;
  tempdata:any;


  ngOnInit(): void {
    // this.tempdata =this.apidata.(0,3) 

    this.service.getdata().subscribe((data:any)=>{
      this.apidata = data;    
      this.filterCategory = data;
      console.log(data);  
    })
  }
  image=[
    {img:'./assets/icons/all-pro.png',name:'All Products',filter:''},
    {img:'./assets/icons/tshirt.png',name:'Mens',filter:"men's clothing"},
    {img:'./assets/icons/jwell.png',name:'Jwellary',filter:'jewelery'},
    {img:'./assets/icons/electro.png',name:'Electronic',filter:'electronics'},
    {img:'./assets/icons/women.png',name:'Women',filter:"women's clothing"}
  ]


  filter(category:string){
    this.filterCategory = this.apidata
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  showMore() {
    let newLength = this.filterCategory.length + 3;
    if (this.apidata.length >0) {
        this.filterCategory.push(this.apidata.length(10))
    }
  }

  slideConfig = { 
    slidesToShow: 4, 
    slidesToScroll: 4,
    autoplay:true,
  };
}
