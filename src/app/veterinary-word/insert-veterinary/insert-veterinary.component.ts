import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VeterinaryWork } from 'src/app/model/veterinary_work.model';
import { DataService } from 'src/app/service/data.service';
import { InsertNextVeterinaryComponent } from '../insert-next-veterinary/insert-next-veterinary.component';

@Component({
  selector: 'app-insert-veterinary',
  templateUrl: './insert-veterinary.component.html',
  styleUrls: ['./insert-veterinary.component.scss']
})
export class InsertVeterinaryComponent {
  base64 : any;
  response={} as VeterinaryWork;
  idx : any;
  id_type_work  : any;
  date = new Date();
  MonthStr: number = +this.date.getMonth();
  MouthNew = this.MonthStr+1;

  dateInsert = this.date.getFullYear()+"-"+this.MouthNew+"-"+this.date.getDate()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<InsertVeterinaryComponent>,private dialog : MatDialog){
    console.log(this.date)
    console.log(this.dateInsert)
    this.response = data.News;
   // this.idx = data.News.
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

  addNew(type_th:string,type_en:string){
      let jsonObj ={
        type_th : type_th,
        type_en : type_en,
        date : this.dateInsert,
        img_main : this.base64
    }
    if(confirm("ยืนยันการเพิ่มหัวข้องานการสัตวแพทย์") == true){
      this.http.post(this.data.apiEndpoint + "/type_work",JSON.stringify(jsonObj),
    {observe:'response'}).subscribe((response: any)=>{
      this.dialogRef.close();
      this.dialog.open(InsertNextVeterinaryComponent,{
        minWidth:'500',
      });
      // this.dialogRef.close();
      // location.reload();
    });
    }
  }
  close(){
    this.dialogRef.close();
  }
}
