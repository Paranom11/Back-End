import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { AddPublicPersonnelComponent } from '../add-public-personnel/add-public-personnel.component';



@Component({
  selector: 'app-add-public',
  templateUrl: './add-public.component.html',
  styleUrls: ['./add-public.component.scss']
})
export class AddPublicComponent {
  base64 : any;
  response : any;
  PaperBase64 : any;

  constructor(private data : DataService,private http:HttpClient, private dialog : MatDialog, private dialogRef :MatDialogRef<AddPublicComponent>){

  }

  getFilePaper(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.PaperBase64 = reader.result;
    };
  }

  getFile(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64 = reader.result;
    };
  }

  addPaper(name_paper : string , datePaper : string){
    let jsonObj ={
      name : name_paper,
      filepath : this.PaperBase64,
      image_pp : this.base64
  }
  // this.http.post(this.data.apiEndpoint + "/publicationofpapers",JSON.stringify(jsonObj),
  // {observe:'response'}).subscribe((response: any)=>{
  //   this.data.datePaper = datePaper;
  //   this.dialogRef.close();
  //   this.dialog.open(AddPublicPersonnelComponent,{
  //     minWidth:'300px',
  //   });
  // });
  this.data.datePaper = datePaper;
  this.dialogRef.close();
  this.dialog.open(AddPublicPersonnelComponent,{
    minWidth:'300px',
  });
  }

  close(){
     this.dialogRef.close();
  }
}
