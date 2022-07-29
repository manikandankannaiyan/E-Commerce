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
  range:any;
  min=10;
  max=1000;
  value=0;
  filterdata:any;

  clicked=false;
  ngOnInit(): void {    
    this.apidata=this.api.datalist;
    this.filterCategory=this.api.datalist;
    
    this.api.search.subscribe((val:any)=>{      
      this.searchKey = val;
    })
  }

  image=[
    {img:'./assets/icons/all-pro.jpg',name:'All Products',filter:''},
    {img:'./assets/icons/tshirt.png',name:'Mens',filter:"men's clothing"},
    {img:'./assets/icons/jwell.png',name:'Jwellary',filter:'jewelery'},
    {img:'./assets/icons/electro.png',name:'Electronic',filter:'electronics'},
    {img:'./assets/icons/women.png',name:'Women',filter:"women's clothing"}
  ]

  title:any;
  filter(category:any){
    this.filterCategory = this.apidata
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
      if(a.price >=this.min && a.price<=category){
        return a       
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
      this.clicked=true
  }

  navbarCollapsed1 = false;

  toggleNavbarCollapsing1() {
      this.navbarCollapsed1 = !this.navbarCollapsed1;
  }

  navbarCollapsed2 = false;

  toggleNavbarCollapsing2() {
      this.navbarCollapsed2 = !this.navbarCollapsed2;
  }

  navbarCollapsed3 = false;

  toggleNavbarCollapsing3() {
      this.navbarCollapsed3 = !this.navbarCollapsed3;
  }

  navbarCollapsed4 = false;

  toggleNavbarCollapsing4() {
      this.navbarCollapsed4 = !this.navbarCollapsed4;
  }

}
