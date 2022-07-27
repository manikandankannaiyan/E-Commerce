import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fakeapidata } from 'src/app/model/fake-api-data';
import { FakeApiService } from 'src/app/service/fake-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor( private service:FakeApiService,private router:Router,private api:fakeapidata) { }

  singledata:any;
  apidata:any;
  filterCategory:any;
  searchKey:string ="";
  centered = false;
  s_max=1000;
  s_min=10;


  ngOnInit(): void {
    console.log(this.singledata);
    
    this.apidata=this.api.datalist;
    this.filterCategory=this.api.datalist;    
    // this.service.getdata().subscribe((data:any)=>{
    //   this.apidata = data;    
    //   this.filterCategory = data;
    // })
  }
  image=[
    {img:'./assets/icons/all-pro.jpg',name:'All Products',filter:''},
    {img:'./assets/icons/tshirt.png',name:'Mens',filter:"men's clothing"},
    {img:'./assets/icons/jwell.png',name:'Jwellary',filter:'jewelery'},
    {img:'./assets/icons/electro.png',name:'Electronic',filter:'electronics'},
    {img:'./assets/icons/women.png',name:'Women',filter:"women's clothing"}
  ]


  title:any;
  filter(category:string){
    this.filterCategory = this.apidata
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })

  }

  slideConfig = { 
    slidesToShow: 4, 
    slidesToScroll: 4,
    autoplay:true,
  };

  id:any;
  expand_data(data:any){    
    this.router.navigate(['product-details'],{queryParams:{data:JSON.stringify(data)}})    
  }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
}
