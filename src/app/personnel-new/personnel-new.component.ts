import { Component } from '@angular/core';
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
  response={} as Personnel;
  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<PersonnelNewComponent>){
    this.response = data.Personnel;
  }
  addNew(name_prefix_th:string,name_prefix_en:string,name_th:string,name_en:string,aptitude_th:string,aptitude_en:string,
    academic_position_th:string,academic_position_en:string,type_personnel_th:string,type_personnel_en:string,email:string,phone:string,picture:string){

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
        picture : picture
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.data.apiEndpoint + "/personnel",jsonString,
    {observe:'response'}).subscribe((response: any)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
    });
  }
  close(){
    this.dialogRef.close();
  }
}
