import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  mentorfields: boolean = false;
  register:any = {	
    "name":"",
    "username":"",
    "linkedin":"",
    "yearsExp":0,
    "startTime": 0,
    "endTime":0,
    "fee" : 0,
    "password" : "",
    "skills" : [""]
  }

  userregister:any={
    "email":""
  }

  role:any={
    "type":""
  }
  constructor(private service:ServiceService) { }
  roletype=['Student','Mentor']
  ngOnInit() {
  }
  registerUser(){
    this.service.signUp(this.register).subscribe((res : any)=>{
      console.log(res); 
      this.register={
      "name":"",
      "username":"",
      "linkedin":"",
      "yearsExp":0,
      "startTime": 0,
      "endTime":0,
      "fee" : 0,
      "password" : "",
      "skills" : [""] 
      }
  });
}


changerole(event) {
  if(event.target.value==='Mentor'){
    this.mentorfields=true;
  }else{
    this.mentorfields=false;
  }
  console.log("Changed month from the Dropdown");
  console.log(event);
}

}
