import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { Khowledge } from 'src/app/model/khowledge.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-editkhowledge',
  templateUrl: './editkhowledge.component.html',
  styleUrls: ['./editkhowledge.component.scss']
})
export class EditkhowledgeComponent {
  [x: string]: any;
  base64 :any;
  khowledgeSelect : any;
  response={} as Khowledge;

  ///wysiwyg
 htmlContent = '';
 faculty_info : any;

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
///

  constructor(private data : DataService,private http:HttpClient,private dialog: MatDialog, private dialogRef :MatDialogRef<EditkhowledgeComponent>){
    this.khowledgeSelect = data.khowledgeSelect;
    console.log(this.khowledgeSelect.id_type_kl);
    http
      .get(
        data.apiEndpoint +
          '/knowledge?filter=id_type_kl,eq,' +
          this.khowledgeSelect.id_type_kl
      )
      .subscribe((data: any) => {
        console.log(this.khowledgeSelect.id_type_kl);
        this.response = data as Khowledge;
      });
}

////wysiwyg
ngOnInit(): void {
  let url = this.data.apiEndpoint + '/knowledge';
  this.http.get(url, {observe : 'response'}).subscribe(
    {
      next: (data :any)=>{
        this.faculty_info = data.body.records[0];
        this.htmlContent = this.faculty_info.text_th;
        console.log(this.faculty_info.id_knowledge);
      },
      error: (err)=>{
        console.log(err);
      }
    }
  )
}
////

getFile(files : FileList){
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => {
    this.base64 = reader.result;
  };
}
save() {
  let jsonObj = {
    text_th: this.htmlContent,
    img: this.base64,
  };
  let jsonString = JSON.stringify(jsonObj);
  this.http
    .put(this.data.apiEndpoint + '/knowledge/' + this.faculty_info.id_knowledge, jsonString, {
      observe: 'response',
    })
    .subscribe((response: any) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
      location.reload();
    });
}
deleteNews(idx: number) {
  this.http.delete(this.data.apiEndpoint+"/knowledge/" + idx)
  .subscribe((res) => {
    this.dialogRef.close();
    this.dialog.open(EditkhowledgeComponent,{
      minWidth:'70%',
    });
  });
}


close(){
    this.dialogRef.close();
  }
}
