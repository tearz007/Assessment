import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {AngularFireModule} from '@angular/fire'
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    MatGridListModule,  

    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
