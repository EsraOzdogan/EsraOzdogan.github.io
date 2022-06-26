import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ContactComponent } from './components/pages/contact/contact.component';



import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { HttpClientModule } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
