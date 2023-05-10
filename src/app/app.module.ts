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
import { PopupComponent } from './home/popup/popup.component';
import { IdentifyComponent } from './menutoober/identify/identify.component';
import { EditIdentifyComponent } from './edit-identify/edit-identify.component';
import { ImageSlideShowComponent } from './menutoober/image-slide-show/image-slide-show.component';
import { AddImageSlidsComponent } from './dialog/add-image-slids/add-image-slids.component';
import { VMSPComponent } from './menutoober/vmsp/vmsp.component';
import { DepartmentComponent } from './menutoober/department/department.component';

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'personnel',component:PersonnelComponent},
  {path:'personnel-new',component:PersonnelNewComponent},
  {path: 'popup',component:PopupComponent} ,
  {path:'identify',component:IdentifyComponent},
  {path:'identify/edit-identify',component:EditIdentifyComponent},
  {path:'ImageSlideShow',component:ImageSlideShowComponent},
  {path:'VMSP',component:VMSPComponent},
  {path:'department',component:DepartmentComponent},


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
    PopupComponent,
      IdentifyComponent,
      EditIdentifyComponent,
      ImageSlideShowComponent,
      AddImageSlidsComponent,
      VMSPComponent,
      DepartmentComponent,




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
