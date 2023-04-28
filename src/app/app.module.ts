import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MenutooberComponent } from './menutoober/menutoober.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonnelComponent } from './personnel/personnel.component';
import { PersonnelEditComponent } from './personnel-edit/personnel-edit.component';
import { PersonnelDeleteComponent } from './personnel-delete/personnel-delete.component';
import { PersonnelWatchComponent } from './personnel-watch/personnel-watch.component';



const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'personnel',component:PersonnelComponent},
  {path:'personnel-edit',component:PersonnelEditComponent},
  {path:'personnel-delete',component:PersonnelDeleteComponent},
  {path:'personnel-watch',component:PersonnelWatchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    MenutooberComponent,
    HeaderComponent,
    PersonnelComponent,
    PersonnelEditComponent,
    PersonnelDeleteComponent,
    PersonnelWatchComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
