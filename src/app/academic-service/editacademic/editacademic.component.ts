import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AcademicServiceOnly } from 'src/app/model/academicOnly.model';
import { AcademicService } from 'src/app/model/academic_service.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-editacademic',
  templateUrl: './editacademic.component.html',
  styleUrls: ['./editacademic.component.scss']
})
export class EditacademicComponent {
  [x: string]: any;
  base64 :any;
  academicSelect : any;
  response={} as AcademicServiceOnly;
  selectes : string[] = []; //สร้างอาเรย์เพื่อพุดค่าtext

  ///wysiwyg
 htmlContent : any;
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

  constructor(private data : DataService,private http:HttpClient,private dialog: MatDialog, private dialogRef :MatDialogRef<EditacademicComponent>){
    this.academicSelect = data.academicSelect;
    // console.log(this.academicSelect.id_type_as);
    http
      .get(
        data.apiEndpoint +
          '/academic_service?filter=id_type_as,eq,' +
          this.academicSelect.id_type_as
      )
      .subscribe((data: any) => {
        // console.log(this.academicSelect.id_type_as);
        this.response = data as AcademicServiceOnly; //as only เท่านั้นนะต้าว
        // console.log(this.response)
        for(let i = 0 ; i<this.response.records.length ;i++){
            this.selectes.push(this.response.records[i].text_th);
        }
        this.htmlContent = this.selectes;
      });
}

getFile(files : FileList){
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => {
    this.base64 = reader.result;
  };
}
save(id_as : number , text_th : string) {
 if(confirm("ยืนยันการเเก้ไขรายละเอียด") == true){
  let jsonObj = {
    text_th: text_th,
    img: this.base64,
  };
  let jsonString = JSON.stringify(jsonObj);
  this.http
    .put(this.data.apiEndpoint + '/academic_service/' + id_as, jsonString, {
      observe: 'response',
    })
    .subscribe((response: any) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
      location.reload();
    });
 }

}
deleteAS(idx: number) {
  if(confirm("ยืนยันการลบรายละเอียด") == true){
  this.http.delete(this.data.apiEndpoint+"/academic_service/" + idx)
  .subscribe((res) => {
    this.dialogRef.close();
    this.dialog.open(EditacademicComponent,{
      minWidth:'70%',
    });
  });
}
}
close(){
    this.dialogRef.close();
  }
}
