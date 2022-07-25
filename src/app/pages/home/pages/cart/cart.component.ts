import { Component, OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartlist:any;
  constructor(private service:fakeapidata) { }

  ngOnInit(): void {
    this.cartlist = this.service.servecart();  
  }

}
