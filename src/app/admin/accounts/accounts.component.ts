import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  block:any={
    "active": true,
    "username": ""
  }
  unblock:any={
    "active": true,
    "username": ""
  }
  constructor(private service:ServiceService) { }

  ngOnInit() {
  }
  blockUsername(){
    this.service.blockUser(this.block).subscribe((res : any)=>{
      console.log(res); 
    })
  }

  unblockUsername(){
    this.service.unblockUser(this.unblock).subscribe((res : any)=>{
      console.log(res); 
    })  
  }

  }