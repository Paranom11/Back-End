import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { News } from 'src/app/model/News.model';
import { PersonnelNewComponent } from 'src/app/personnel-new/personnel-new.component';
import { DataService } from 'src/app/service/data.service';
import { InsertNextComponent } from '../insert-next/insert-next.component';

@Component({
  selector: 'app-insert-new',
  templateUrl: './insert-new.component.html',
  styleUrls: ['./insert-new.component.scss']
})
export class InsertNewComponent {
  base64 : any;
  response={} as News;
  idx : any;
  idx_type_new : any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();


  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<InsertNewComponent>,private dialog : MatDialog){
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

  addNew(title_news_th:string,title_news_en:string){
      let jsonObj ={
        type_th : title_news_th,
        type_en : title_news_en,
        date : this.dateInsert,
        img : this.base64
    }
    if(confirm("ยืนยันการเพิ่มหัวข้อข่าวประชาสัมพันธ์") == true){
      this.http.post(this.data.apiEndpoint + "/type_news",JSON.stringify(jsonObj),
    {observe:'response'}).subscribe((response: any)=>{
      this.dialogRef.close();
      this.dialog.open(InsertNextComponent,{
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
