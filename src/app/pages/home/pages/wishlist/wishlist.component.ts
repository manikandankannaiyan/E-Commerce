import { Component, OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist:any;
  price: any;
  n=1;
  single_data: any;
  constructor(private api:fakeapidata) { }

  ngOnInit(): void {
    this.wishlist = this.api.servewish();    
  }

  savecartlist(data:any){
    console.log(data);
    
    this.api.savecart(data);
  }

  removeitem(item: any){
    this.api.removeitem(item);
  }
}
