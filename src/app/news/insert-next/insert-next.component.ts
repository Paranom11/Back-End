import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { InsertNewComponent } from '../insert-new/insert-new.component';
import { MatDialogRef } from '@angular/material/dialog';
import { News } from 'src/app/model/News.model';
import { type_news } from 'src/app/model/type_news.model';

@Component({
  selector: 'app-insert-next',
  templateUrl: './insert-next.component.html',
  styleUrls: ['./insert-next.component.scss']
})
export class InsertNextComponent {
  [x: string]: any;
  response={} as News;
  responseType={} as type_news ;
  sizeType : any;
  base64_1 : any;
  base64_2 : any;
  base64_3 : any;
  base64_4 : any;
  base64_5 : any;
  base64_6 : any;
  base64_7 : any;
  indexMax : number | undefined;
  text_new: any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<InsertNextComponent>){
    console.log(this.dateInsert)
    http.get(data.apiEndpoint + "/news?join=type_news")
      .subscribe((data : any) => {
       this.response = data as News;
  });

  http.get(data.apiEndpoint + "/type_news/?include=type_news.id_type_news")
  .subscribe((data2 : any) => {
     this.responseType = data2 as type_news;
     for(let i =0 ;i<this.responseType.records.length;i++){
        this.indexMax = this.responseType.records[i].id_type_news;
     }
     console.log(this.indexMax);
});
  }

  addNews(text_th1:string,text_th2:string,text_th3:string,text_th4:string,text_th5:string,text_th6:string,text_th7:string){
   var arr_text = [text_th1,text_th2,text_th3,text_th4,text_th5,text_th6,text_th7]
   var arr_img = [this.base64_1,this.base64_2,this.base64_3,this.base64_4,this.base64_5,this.base64_6,this.base64_7]
   var img_new:string[] = [];
   var text_new:string[] = [];

   for(let i = 0 ;i<arr_text.length ;i++){
    if(arr_img[i]==null || arr_img[i]==undefined || arr_img[i]==""  ){
    }else{
       img_new.push(arr_img[i]);
    }
    if(arr_text[i]==null || arr_text[i]==undefined || arr_text[i]==""  ){
    }else{
      text_new.push(arr_text[i]);
    }
    }
    let recoedDB : number
    if(text_new.length > img_new.length){
         recoedDB = text_new.length;
    }else{
         recoedDB = img_new.length;
    }
    console.log(this.dateInsert);
    for(let round = 0 ; round<recoedDB ;round++){
      let jsonObj ={
        text_th : text_new[round],
        img : img_new[round],
        id_type_news : this.indexMax,
        date : this.dateInsert
    }
      this.http.post(this.data.apiEndpoint + "/news",JSON.stringify(jsonObj),
      {observe:'response'}).subscribe((response: any)=>{
       this.dialogRef.close();
        location.reload();
      });
    }
  }

  close(){
    this.dialogRef.close();
  }
  getFile1(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64_1 = reader.result;
    };

  }
  getFile2(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64_2 = reader.result;
    };

  }
  getFile3(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64_3 = reader.result;
    };

  }
  getFile4(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64_4 = reader.result;
    };

  }
  getFile5(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64_5 = reader.result;
    };

  }
  getFile7(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64_7 = reader.result;
    };

  }
  getFile6(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64_6 = reader.result;
    };

  }
}
