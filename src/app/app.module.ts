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
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonnelNewComponent } from './personnel-new/personnel-new.component';
import { PersonnelEditComponent } from './personnel-edit/personnel-edit.component';

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'personnel',component:PersonnelComponent},
  {path:'personnel-new',component:PersonnelNewComponent},

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
    PersonnelNewComponent,
    PersonnelEditComponent,





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
    HttpClientModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
