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
  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<InsertNextComponent>){
    http.get(data.apiEndpoint + "/news?join=type_news")
      .subscribe((data : any) => {
       this.response = data as News;
  });

  http.get(data.apiEndpoint + "/type_news/?include=type_news.id_type_news")
  .subscribe((data2 : any) => {
     this.responseType = data2 as type_news;
});
  }

  addNews(text_th1:string,text_th2:string,text_th3:string,text_th4:string,text_th5:string,text_th6:string,text_th7:string){
   var arr_text = [text_th1,text_th2,text_th3,text_th4,text_th5,text_th6,text_th7]
   var arr_img = [this.base64_1,this.base64_2,this.base64_3,this.base64_4,this.base64_5,this.base64_6,this.base64_7]
    for(let i = 0 ;i<arr_text.length ;i++){
    console.log(arr_text[i]);
    if(arr_text[i]!=null && arr_img[i]!=null || arr_text[i]!=undefined && arr_img[i]!=undefined){

      let jsonObj ={
        text_th : arr_text[i],
        img : arr_img[i],
        id_type_news : this.responseType.records.length
    }
      this.http.post(this.data.apiEndpoint + "/news",JSON.stringify(jsonObj),
      {observe:'response'}).subscribe((response: any)=>{
      //  this.dialogRef.close();
        //location.reload();
      });
    }

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
