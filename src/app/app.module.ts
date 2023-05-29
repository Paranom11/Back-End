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
import { ContactComponent } from './menutoober/contact/contact.component';
import { ConferencePdfFileEditComponent } from './conference-pdf-file/conference-pdf-file-edit/conference-pdf-file-edit.component';
import {MatSelectModule} from '@angular/material/select';
import { ConferencePdfFileAddComponent } from './conference-pdf-file/conference-pdf-file-add/conference-pdf-file-add.component';
import { NewsComponent } from './news/news.component';
import { ConferencePdfFileComponent } from './conference-pdf-file/conference-pdf-file.component';
import { InsertNewComponent } from './news/insert-new/insert-new.component';
import { InsertNextComponent } from './news/insert-next/insert-next.component';
import { EditComponent } from './news/edit/edit.component';
import { EditTypeNewsComponent } from './news/edit-type-news/edit-type-news.component';
import { KhowledgeComponent } from './khowledge/khowledge.component';
import { AddKhowledgeComponent } from './khowledge/add-khowledge/add-khowledge.component';
import { AddkhowledgedetailComponent } from './khowledge/addkhowledgedetail/addkhowledgedetail.component';
import { EditkhowledgeComponent } from './khowledge/editkhowledge/editkhowledge.component';
import { EditTypeKhowledgeComponent } from './khowledge/edit-type-khowledge/edit-type-khowledge.component';
import { AgencyComponent } from './agency/agency.component';
import { VeterinaryDutyComponent } from './veterinary-duty/veterinary-duty.component';
import { AddDutyComponent } from './veterinary-duty/add-duty/add-duty.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddDutyPersonnelComponent } from './veterinary-duty/add-duty-personnel/add-duty-personnel.component';
import { EditDutyComponent } from './veterinary-duty/edit-duty/edit-duty.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { LoginWarnComponent } from './login/login-warn/login-warn.component';
import { VeterinaryWordComponent } from './veterinary-word/veterinary-word.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditVeterinaryComponent } from './veterinary-word/edit-veterinary/edit-veterinary.component';
import { EditTypeVeterinaryComponent } from './veterinary-word/edit-type-veterinary/edit-type-veterinary.component';
import { InsertVeterinaryComponent } from './veterinary-word/insert-veterinary/insert-veterinary.component';
import { InsertNextVeterinaryComponent } from './veterinary-word/insert-next-veterinary/insert-next-veterinary.component';

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
  {path:'contact',component:ContactComponent},
  {path:'news',component:NewsComponent},
  {path:'conference-pdf-file',component:ConferencePdfFileComponent},
  {path:'khowledge',component:KhowledgeComponent},
  {path:'stationed',component:VeterinaryDutyComponent},
  {path:'veterinary-word',component:VeterinaryWordComponent},
  {path:'agency',component:AgencyComponent},
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
      ContactComponent,
      NewsComponent,
      InsertNewComponent,
      InsertNextComponent,
      ConferencePdfFileEditComponent,
      EditComponent,
      EditTypeNewsComponent,
      KhowledgeComponent,
      AddKhowledgeComponent,
      AddkhowledgedetailComponent,
      EditkhowledgeComponent,
      EditTypeKhowledgeComponent,
      VeterinaryDutyComponent,
      AddDutyComponent,
      AddDutyPersonnelComponent,
      EditDutyComponent,
      ConferencePdfFileAddComponent,
      AgencyComponent,
      ConferencePdfFileComponent,
      LoginWarnComponent,
      VeterinaryWordComponent,
      EditVeterinaryComponent,
      EditTypeVeterinaryComponent,
      InsertVeterinaryComponent,
      InsertNextVeterinaryComponent

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
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    AngularEditorModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
