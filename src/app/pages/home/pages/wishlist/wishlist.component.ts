import { Component, OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist:any;
  constructor(private service:fakeapidata) { }

  ngOnInit(): void {
    this.wishlist = this.service.servewish();    
  }

  savecartlist(){
    // this.service.savecart(this.single_data);
  }

}
