import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Personnel } from '../model/personnel.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personnel-new',
  templateUrl: './personnel-new.component.html',
  styleUrls: ['./personnel-new.component.scss']
})
export class PersonnelNewComponent {
  base64 : any;
  response={} as Personnel;
  filename : any;
  url : any;
  sizefile : any;
  typefile : any;
  file : any;

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<PersonnelNewComponent>){
    this.response = data.Personnel;
  }
  addNew(name_prefix_th:string,name_prefix_en:string,name_th:string,name_en:string,aptitude_th:string,aptitude_en:string,
    academic_position_th:string,academic_position_en:string,type_personnel_th:string,type_personnel_en:string,email:string,phone:string){
      console.log(this.file);
      let jsonObj ={
        name_th : name_th,
        name_en: name_en,
        aptitude_th : aptitude_th,
        aptitude_en : aptitude_en,
        academic_position_th : academic_position_th,
        academic_position_en : academic_position_en,
        type_personnel_th : type_personnel_th,
        type_personnel_en : type_personnel_en,
        name_prefix_th : name_prefix_th,
        name_prefix_en : name_prefix_en,
        email : email,
        phone_number : phone,
        picture : this.base64
    }

    this.http.post(this.data.apiEndpoint + "/personnel",JSON.stringify(jsonObj),
    {observe:'response'}).subscribe((response: any)=>{
      this.dialogRef.close();
    });
  }

  close(){
    this.dialogRef.close();
  }
  // upload(){
  //   console.log("OK");
  //   let json = {
  //     Filename : this.filename,
  //     Filesize : this.sizefile,
  //     Filetype : this.typefile
  //   }
  //   this.http.post('ftp://u528477660.anihmsu@ftp.comsciproject.net/images',JSON.stringify(json)).subscribe(data => {
  //     console.log(data);
  //     let jsonObj : any = data;
  //     this.url = jsonObj.url;
  //   }, error => {

  //   });
  // }
  getFile(files : FileList){
    let file = files.item(0);
    this.filename = file?.name;
    this.typefile = file?.type;
    this.sizefile = file?.size;


    console.log(this.typefile)
    console.log(this.filename);
    console.log(this.sizefile)




    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64 = reader.result;
      const url = this.base64;
      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          this.file = new File([blob],this.filename,{type:"image/png"})
          console.log(this.file);
        });
    };
  }
}
