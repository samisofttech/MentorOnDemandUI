import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-maintain-trainings',
  templateUrl: './maintain-trainings.component.html',
  styleUrls: ['./maintain-trainings.component.scss']
})
export class MaintainTrainingsComponent implements OnInit {
  mentorskill:any = {
    "facilities_offered": "",
    "id": 0,
    "mid": 0,
    "self_rating": "",
    "sid": 0,
    "trainings_delivered": "",
    "years_of_exp": 0
  }
  constructor(private service:ServiceService) { }

  ngOnInit() {
  }
  AddMentorSkills(){
    this.service.addmentorSkill(this.mentorskill).subscribe((res : any)=>{
      console.log(res); 
      this.mentorskill = {
        "facilities_offered": "",
        "id": 0,
        "mid": 0,
        "self_rating": "",
        "sid": 0,
        "trainings_delivered": "",
        "years_of_exp": 0
      }  
    });
  }
}
