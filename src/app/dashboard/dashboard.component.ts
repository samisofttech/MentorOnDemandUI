import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  services:any[];

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.get_response().subscribe((res : any[])=>{
      console.log(res);  
      this.services = res;    
    });
    
    
    // .then(res => {
    //   this.services = res;
    //   console.log("in component: "+this.services);
    // });
  }

}
