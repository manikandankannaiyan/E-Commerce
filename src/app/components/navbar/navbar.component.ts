import { Component, OnInit } from '@angular/core';
import { fakeapidata } from 'src/app/model/fake-api-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartitem:any;
  wishitem:any;
  filterCategory:any;
  apidata:any
  public searchTerm !: string;
  constructor(private api:fakeapidata) { }

  ngOnInit(): void {
    this.api.getnotify().subscribe((data:any)=>{
      this.cartitem=data.length;
    }) 
    this.api.getnotifywish().subscribe((data:any)=>{
      this.wishitem=data.length;
    })    
  }
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.api.search.next(this.searchTerm);
  }

}
