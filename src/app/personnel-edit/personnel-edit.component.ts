import { Component } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { PersonnelNewComponent } from '../personnel-new/personnel-new.component';
import { PersonnelComponent } from '../personnel/personnel.component';

@Component({
  selector: 'app-personnel-edit',
  templateUrl: './personnel-edit.component.html',
  styleUrls: ['./personnel-edit.component.scss']
})
export class PersonnelEditComponent {
  response={} as Personnel;
  countries : any;
  base64 : any;
  filename : any;
  selected_th = '';
  selected_en = '';

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<PersonnelEditComponent>){
    this.response = data.Personnel;
    this.countries = data.countries;
    this.selected_th = data.countries.type_personnel_th;
    this.selected_en = data.countries.type_personnel_en;
  }
  close(){
    this.dialogRef.close();
  }
  save(name_prefix_th:string,name_prefix_en:string,name_th:string,name_en:string,aptitude_th:string,aptitude_en:string,
    academic_position_th:string,academic_position_en:string,type_personnel_th:string,type_personnel_en:string,email:string,phone:string,idx : number){

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

    let jsonString = JSON.stringify(jsonObj);
    this.http.put(this.data.apiEndpoint + "/personnel/"+idx,jsonString,
    {observe:'response'}).subscribe((response: any)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
      location.reload();
    });
  }
  getFile(files : FileList){
    let file = files.item(0);
    this.filename = file?.name;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64 = reader.result;
    };
  }
}

