import { Component, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/fake-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private service:FakeApiService) { }

  ngOnInit(): void {
    this.service.getdata().subscribe((data:any)=>{
      console.log(data);
    })
  }

}
