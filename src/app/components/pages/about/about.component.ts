import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { GetUserData } from 'src/app/models/getUserData';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user = GetUserData;
  //public user: User

  aboutTitles;
  constructor(private activatedRoute:ActivatedRoute, private firebaseService : FirebaseService,public db: AngularFireDatabase) { }

  ngOnInit(): void {
    //console.log(this.user.skills)
    //this.firebaseService.getUser("esra")

    this.getAboutTitles();

    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        debugger
        this.firebaseService.getUser(params["id"])
      }else{
        this.firebaseService.getUser("esra")
      }
    })
  }

  getAboutTitles(){
    this.db.list("aboutTitles")
    .valueChanges()
    .subscribe(res => {
      this.aboutTitles = res;
    });
  }

}
