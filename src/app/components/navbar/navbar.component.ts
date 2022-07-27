import { Component, OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartitem:any;
  constructor(private api:fakeapidata) { }

  ngOnInit(): void {
    this.api.getnotify().subscribe((data:any)=>{
      this.cartitem=data.length;
    })    
  }
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
}
