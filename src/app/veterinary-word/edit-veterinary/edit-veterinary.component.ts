import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { VeterinaryWorkOnly } from 'src/app/model/veterinary_work-Only.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-veterinary',
  templateUrl: './edit-veterinary.component.html',
  styleUrls: ['./edit-veterinary.component.scss']
})
export class EditVeterinaryComponent {
  response = {} as VeterinaryWorkOnly;
  countries: any;
  selected_th: any;
  selected_en: any;
  base64: any;


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

  constructor(
    private data: DataService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<EditVeterinaryComponent>,
    private dialog: MatDialog
  ) {
    this.countries = data.countries;
    console.log(this.countries.id_type_work);
    http
      .get(
        data.apiEndpoint +
          '/veterinary_work?filter=id_type_work,eq,' +
          this.countries.id_type_work
      )
      .subscribe((data: any) => {
        console.log(this.countries.id_type_work);
        this.response = data as VeterinaryWorkOnly;
      });
  }

////wysiwyg
ngOnInit(): void {

  let url = this.data.apiEndpoint + '/veterinary_work';
  this.http.get(url, {observe : 'response'}).subscribe(
    {
      next: (data :any)=>{
        this.faculty_info = data.body.records[0];
        this.htmlContent = this.faculty_info.text_th;
        console.log(this.faculty_info.id_word);
      },
      error: (err)=>{
        console.log(err);
      }
    }
  )
}
////

  getFile(files: FileList) {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      this.base64 = reader.result;
    };
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    let jsonObj = {
      text_th: this.htmlContent,
      img: this.base64,
    };
    let jsonString = JSON.stringify(jsonObj);
    this.http
      .put(this.data.apiEndpoint + '/veterinary_work/' + this.faculty_info.id_word, jsonString, {
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
    this.http.delete(this.data.apiEndpoint+"/veterinary_work/" + idx)
    .subscribe((res) => {
      this.dialogRef.close();
      this.dialog.open(EditVeterinaryComponent,{
        minWidth:'70%',
      });
    });
  }
}
