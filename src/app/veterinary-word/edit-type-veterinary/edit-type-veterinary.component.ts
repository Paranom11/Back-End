import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-type-veterinary',
  templateUrl: './edit-type-veterinary.component.html',
  styleUrls: ['./edit-type-veterinary.component.scss']
})
export class EditTypeVeterinaryComponent {
  typeWork : any;
  base64 : any;

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<EditTypeVeterinaryComponent>){
    this.typeWork = data.typeWork;
    console.log(this.typeWork);
  }
  getFile(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64 = reader.result;
    };
  }
  edit(type_th:string , type_en:string , idx : number){
    if(confirm("ยืนยันการแก้ไขหัวข้องานการสัตวแพยท์") == true){
       let jsonObj ={
          type_th : type_th,
          type_en : type_en,
          img_main : this.base64
      }

      let jsonString = JSON.stringify(jsonObj);
      this.http.put(this.data.apiEndpoint + "/type_work/"+idx,jsonString,
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
}
