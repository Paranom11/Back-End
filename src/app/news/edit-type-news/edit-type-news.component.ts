import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-type-news',
  templateUrl: './edit-type-news.component.html',
  styleUrls: ['./edit-type-news.component.scss']
})
export class EditTypeNewsComponent {
  typeNews : any;
  base64 : any;

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<EditTypeNewsComponent>){
    this.typeNews = data.typeNews;
    console.log(this.typeNews);
  }
  getFile(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64 = reader.result;
    };
  }
  edit(title_news_th:string , title_news_en:string , idx : number){
    if(confirm("ยืนยันการแก้ไขหัวข้อข่าว") == true){
       let jsonObj ={
          type_th : title_news_th,
          type_en : title_news_en,
          img : this.base64
      }

      let jsonString = JSON.stringify(jsonObj);
      this.http.put(this.data.apiEndpoint + "/type_news/"+idx,jsonString,
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
