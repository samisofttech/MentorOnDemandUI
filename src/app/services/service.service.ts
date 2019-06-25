import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  get_response(){
    return this.httpClient.get('http://localhost:3000/services');
  }

  addSkill(paramObj){
    return this.httpClient.post('http://localhost:8960/v1/createskill', paramObj);
  }

  fetchSkills(){
    return this.httpClient.get('http://localhost:8960/v1/skills');
  }

  signUp(paramObj){
    return this.httpClient.post('http://localhost:8081/v1/api/auth/mentor/signup', paramObj);
  }

  addmentorSkill(paramObj){
    return this.httpClient.post('http://localhost:8958/v1/mentorSkill', paramObj);
  }

  blockUser(paramObj){
    return this.httpClient.post('http://localhost:8954/v1/user/block', paramObj); 
  }

  unblockUser(paramObj){
    return this.httpClient.post('http://localhost:8954/v1/user/unblock', paramObj); 
  }


  getSearchTrainingsList(){
    let trainings:any = [{
      "tname":"Core Java",
      "tDesc":"Pave your way to becoming a consummate Java programmer. Learn Java coding in a very easy step by step manner.",
      "fees":"$300",
      "dueIn":"6 Days",
      "ratings":"8"
    },
    {
      "tname":"AngularJS",
      "tDesc":"Master AngularJS and the Javascript concepts behind it, design custom directives, and build a single page application.",
      "fees":"$800",
      "dueIn":"2 Days",
      "ratings":"8"
    },
    {
      "tname":"MongoDB",
      "tDesc":"Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!",
      "fees":"$150",
      "dueIn":"3 Days",
      "ratings":"8"
    }];
    return trainings;
  }
  
  getCurrentTraiings(){
    let ctrainings = [{
      "tname":"Core Java",
      "tDesc":"Pave your way to becoming a consummate Java programmer. Learn Java coding in a very easy step by step manner.",
      "status":"60"
    },
    {
      "tname":"AngularJS",
      "tDesc":"Master AngularJS and the Javascript concepts behind it, design custom directives, and build a single page application.",
      "status":"40"
    },
    {
      "tname":"MongoDB",
      "tDesc":"Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!",
      "status":"20"
    }];
    return ctrainings;
  }

  getCompletedTrainings(){
    let trainings:any = [{
      "tname":"Core Java",
      "tDesc":"Pave your way to becoming a consummate Java programmer. Learn Java coding in a very easy step by step manner.",
      "fees":"$300",
      "dueIn":"6 Days",
      "ratings":"8"
    },
    {
      "tname":"AngularJS",
      "tDesc":"Master AngularJS and the Javascript concepts behind it, design custom directives, and build a single page application.",
      "fees":"$800",
      "dueIn":"2 Days",
      "ratings":"8"
    },
    {
      "tname":"MongoDB",
      "tDesc":"Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!",
      "fees":"$150",
      "dueIn":"3 Days",
      "ratings":"8"
    }];
    return trainings;
  }

  getSkills(){
    let skills = [{
      "name":"Java",
      "duration":"2 months",
      "prerequites":"Core Java",
      "price":"$200"
    },
    {
      "name":"AngularJS",
      "duration":"1 months",
      "prerequites":"Javascript",
      "price":"$500"
    }];
    return skills;
  }
  getEnrollments(){
    let enrollments = [{
      "name":"Suresh",
      "training":"Java",
      "amount":"$77",
      "date":"May 15, 2019"
    },
    {
      "name":"Ramesh",
      "training":"AngualrJS",
      "amount":"$100",
      "date":"May 25, 2019"
    },
    {
      "name":"Pooja",
      "training":"MongoDB",
      "amount":"$190",
      "date":"May 05, 2019"
    },
    {
      "name":"Sapna",
      "training":"Java",
      "amount":"$77",
      "date":"May 15, 2019"
    }];
    return enrollments;
  }

  getTechnologies(){
    let techs = [{
      "name":"Java",
      "level":"Beginner",
      "class":"badge badge-primary"
    },{
      "name":"Spring Boot",
      "level":"Experienced",
      "class":"badge badge-info"
    },{
      "name":"AngualrJS",
      "level":"Expert",
      "class":"badge badge-success"
    },{
      "name":"MongoDB",
      "level":"New",
      "class":"badge badge-warning"
    }];
    return techs;
  }
}
