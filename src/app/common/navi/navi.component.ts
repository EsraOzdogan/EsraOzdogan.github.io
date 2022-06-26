import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { GetUserData } from 'src/app/models/getUserData';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  nav;
  user = GetUserData;
  constructor(public db: AngularFireDatabase) { }

  ngOnInit(): void {
   this.getNav()
    console.log(this.nav)
  }

  getNav(){
    this.db.list("nav")
    .valueChanges()
    .subscribe(res => {
      this.nav = res;
    });
  }


}
