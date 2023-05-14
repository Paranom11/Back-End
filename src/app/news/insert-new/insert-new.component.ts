import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { News } from 'src/app/model/News.model';
import { PersonnelNewComponent } from 'src/app/personnel-new/personnel-new.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-insert-new',
  templateUrl: './insert-new.component.html',
  styleUrls: ['./insert-new.component.scss']
})
export class InsertNewComponent {
  base64 : any;
  response={} as News;
  idx : any;

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
        title_news_th : title_news_th,
        title_news_en : title_news_en,
        img_news_main : this.base64
    }
    this.http.post(this.data.apiEndpoint + "/title_news",JSON.stringify(jsonObj),
    {observe:'response'}).subscribe((response: any)=>{
      this.dialog.open(PersonnelNewComponent,{
        minWidth:'300px',
      });
      // this.dialogRef.close();
      // location.reload();
    });
  }
  close(){
    this.dialogRef.close();
  }
}
