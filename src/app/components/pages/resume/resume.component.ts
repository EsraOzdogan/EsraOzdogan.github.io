import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/models/education';
import { GetUserData } from 'src/app/models/getUserData';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  user = GetUserData;
  education : Education

  constructor(private activatedRoute:ActivatedRoute, private firebaseService : FirebaseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        debugger
        this.firebaseService.getUser(params["id"])
      }else{
        this.firebaseService.getUser("esra")
      }
    })
  }
}
