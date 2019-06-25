import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  tableDetails: string [];
  displayAddSkillCard:any = false;
  skill:any = {
    "duration": "",
    "prerequites": "",
    "price": "",
    "skillname": ""
  };
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.getSkills(); 
  }
  displayAdd(){
    this.displayAddSkillCard = true;
  }
 
  submitAdd(){
    this.service.addSkill(this.skill).subscribe((res : any)=>{
      console.log(res); 
      this.skill={
        "duration": "",
        "prerequites": "",
        "price": "",
        "skillname": ""
      }; 
      this.getSkills();   
    });
  }
  getSkills(){
    this.service.fetchSkills().subscribe(
      data => {
        this.tableDetails = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      }
    )};
  
  

}
