import { Component } from '@angular/core';
import { AddAcademicComponent } from '../add-academic/add-academic.component';
import { AcademicService } from 'src/app/model/academic_service.model';
import { TypeAcademicService } from 'src/app/model/type_academic_service.model';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AcademicServiceComponent } from '../academic-service.component';

@Component({
  selector: 'app-add-typeacademic',
  templateUrl: './add-typeacademic.component.html',
  styleUrls: ['./add-typeacademic.component.scss']
})
export class AddTypeacademicComponent {
  base64 : any;
  response={} as AcademicService;
  typeacademicservice={} as TypeAcademicService;
  khowledgeSelect : any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog,private dialogRef :MatDialogRef<AcademicServiceComponent>){
      this.khowledgeSelect = dataService.khowledgeSelect;
      console.log(this.khowledgeSelect);
}
addAcademic(title_news_th:string,title_news_en:string){
  let jsonObj ={
    type_th : title_news_th,
    type_en : title_news_en,
    date : this.dateInsert,
    img_main : this.base64
}
if(confirm("ยืนยันการเพิ่มหัวข้อความรู้") == true){
  this.http.post(this.dataService.apiEndpoint + "/type_academic_service",JSON.stringify(jsonObj),
{observe:'response'}).subscribe((response: any)=>{
  this.dialogRef.close();
  this.dialog.open(AddAcademicComponent,{
    minWidth:'500',
  });
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
