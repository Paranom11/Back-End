import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Khowledge } from 'src/app/model/khowledge.model';
import { Type_Khowledge } from 'src/app/model/type_khowledge.model';
import { DataService } from 'src/app/service/data.service';
import { AddkhowledgedetailComponent } from '../addkhowledgedetail/addkhowledgedetail.component';

@Component({
  selector: 'app-add-khowledge',
  templateUrl: './add-khowledge.component.html',
  styleUrls: ['./add-khowledge.component.scss']
})
export class AddKhowledgeComponent {
  base64 : any;
  response={} as Khowledge;
  typeKhowledge={} as Type_Khowledge;
  khowledgeSelect : any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog,private dialogRef :MatDialogRef<Khowledge>){
      this.khowledgeSelect = dataService.khowledgeSelect;
      console.log(this.khowledgeSelect);
}
addkhowledge(title_news_th:string,title_news_en:string){
  let jsonObj ={
    type_th : title_news_th,
    type_en : title_news_en,
    date : this.dateInsert,
    img_main : this.base64
}
if(confirm("ยืนยันการเพิ่มหัวข้อความรู้") == true){
  this.http.post(this.dataService.apiEndpoint + "/type_knowledge",JSON.stringify(jsonObj),
{observe:'response'}).subscribe((response: any)=>{
  this.dialogRef.close();
  this.dialog.open(AddkhowledgedetailComponent,{
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
