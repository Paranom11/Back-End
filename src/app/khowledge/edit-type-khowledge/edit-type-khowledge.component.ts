import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EditTypeNewsComponent } from 'src/app/news/edit-type-news/edit-type-news.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-type-khowledge',
  templateUrl: './edit-type-khowledge.component.html',
  styleUrls: ['./edit-type-khowledge.component.scss']
})
export class EditTypeKhowledgeComponent {
  khowledgeSelect : any;
  base64 :any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<EditTypeNewsComponent>){
    this.khowledgeSelect = data.khowledgeSelect;
    console.log(this.khowledgeSelect);
  }

  edit(title_news_th:string,title_news_en:string,idx : number){
    if(confirm("ยืนยันการแก้ไขหัวข้อความรู้") == true){
      let jsonObj ={
         type_th : title_news_th,
         type_en : title_news_en,
         img_main : this.base64,
         date : this.dateInsert
     }

     let jsonString = JSON.stringify(jsonObj);
     this.http.put(this.data.apiEndpoint + "/type_knowledge/"+idx,jsonString,
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
