import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-typeacademic',
  templateUrl: './edit-typeacademic.component.html',
  styleUrls: ['./edit-typeacademic.component.scss']
})
export class EditTypeacademicComponent {
  academicSelect : any;
  base64 :any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<EditTypeacademicComponent>){
    this.academicSelect = data.academicSelect;
    console.log(this.academicSelect);
  }

  edit(type_th:string,type_en:string,idx : number){
    if(confirm("ยืนยันการแก้ไขหัวข้อความรู้") == true){
      let jsonObj ={
         type_th : type_th,
         type_en : type_en,
         img_main : this.base64,
         date : this.dateInsert
     }

     let jsonString = JSON.stringify(jsonObj);
     this.http.put(this.data.apiEndpoint + "/type_academic_service/"+idx,jsonString,
     {observe:'response'}).subscribe((response: any)=>{
       console.log(JSON.stringify(response.status));
       console.log(JSON.stringify(response.body));
       this.dialogRef.close();
       location.reload();
     });

  }
}
  close(){
    this.dialogRef.close();
  }

  getFile(files : FileList){
    let file = files.item(0);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64 = reader.result;
    };
}
}
