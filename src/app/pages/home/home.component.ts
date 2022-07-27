import { Component, OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';
import { FakeApiService } from 'src/app/service/fake-api.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  centered = false;
  
  apidata:any;
  
  max: number = 5;

  searchKey:string ="";

  filterCategory : any;

  constructor( private service:FakeApiService, private api:fakeapidata) { }

  ngOnInit(): void {    
    this.apidata=this.api.datalist;
    this.filterCategory=this.api.datalist;    
      
    this.api.search.subscribe((val:any)=>{      
      this.searchKey = val;
    })
  }

  slideConfig1 = { 
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: false,
    vertical:true,
    autoplay:true,
    verticalSwiping:true,
  };
  slideConfig2 = { 
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
  };


  filter(category:string){
    this.filterCategory = this.apidata
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  filter_title=[
    {name:'All Category',filter:''},
    {name:"Men's",filter:"men's clothing"},
    {name:"Women's",filter:"women's clothing"},
    {name:'Jewelery',filter:'jewelery'},
    {name:'Electronics',filter:'electronics'}
  ]
  
}
