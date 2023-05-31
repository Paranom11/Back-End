import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { InsertNewComponent } from '../insert-new/insert-new.component';
import { MatDialogRef } from '@angular/material/dialog';
import { News } from 'src/app/model/News.model';
import { type_news } from 'src/app/model/type_news.model';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-insert-next',
  templateUrl: './insert-next.component.html',
  styleUrls: ['./insert-next.component.scss']
})
export class InsertNextComponent {

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
  indexMaxNews : any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

  news_info : any;
  htmlContent ='';
  htmlContent1 ='';
  htmlContent2 ='';
  htmlContent3 ='';
  htmlContent4 ='';
  htmlContent5 ='';
  htmlContent6 ='';
  editorConfig: AngularEditorModule = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},

      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],

};

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<InsertNextComponent>){
    console.log(this.dateInsert)
    http.get(data.apiEndpoint + "/news?join=type_news")
      .subscribe((data : any) => {

  });

  http.get(data.apiEndpoint + "/type_news?include=id_type_news&order=id_type_news,desc")
  .subscribe((data2 : any) => {
    this.indexMax = data2.records[0].id_type_news;
     console.log(this.indexMax);
});
  }
////wysiwyg
ngOnInit(): void {
  let url = this.data.apiEndpoint + '/veterinary_work';
  this.http.get(url, {observe : 'response'}).subscribe(
    {
      next: (data :any)=>{
        this.htmlContent = this.news_info.text_th;

        console.log(this.news_info.id_work);
      },
      error: (err)=>{
        console.log(err);

      }
    }

  )
}
////
  addNews(){
   var arr_text = [this.htmlContent,this.htmlContent1,this.htmlContent2,this.htmlContent3, this.htmlContent4, this.htmlContent5, this.htmlContent6]///wysiwyg
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
    let recoedDB : number;
    if(text_new.length > img_new.length){
         recoedDB = text_new.length;
    }else{
         recoedDB = img_new.length;
    }
    console.log(this.dateInsert);
    console.log(text_new);
    console.log(img_new);
    console.log(recoedDB);
    for(let round = 0 ; round<recoedDB ;round++){
      let jsonObj ={
        text_th : text_new[round],
        img : img_new[round],
        id_type_news : this.indexMax,
        date : this.dateInsert
    }
      this.http.post(this.data.apiEndpoint + "/news",JSON.stringify(jsonObj),
      {observe:'response'}).subscribe({
        next: (response: {status : any; body : any;}) => {
          console.log(JSON.stringify(response.status));
          console.log(JSON.stringify(response.body));
         this.dialogRef.close();

         setTimeout(function(){
          window.location.reload();
       }, 3000);

        }, error : (err)=>{
          console.log(err);
        }
      })
    }
  }

  close(){
      this.http.delete(this.data.apiEndpoint+"/type_news/" + this.indexMax).subscribe((res) => {
        console.log(res);
        this.dialogRef.close();
        location.reload();
      });
  }

  getFile1(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64_1 = reader.result;
    };
  }

  getFile2(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64_2 = reader.result;
    };
  }

  getFile3(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64_3 = reader.result;
    };
  }

  getFile4(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64_4 = reader.result;
    };
  }

  getFile5(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64_5 = reader.result;
    };

  }
  getFile7(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64_7 = reader.result;
    };
  }

  getFile6(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64_6 = reader.result;
    };
  }
}
