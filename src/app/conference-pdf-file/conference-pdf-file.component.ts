import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Upload } from '../model/pdf.model';
import { DataService } from '../service/data.service';
import { MatListOption } from '@angular/material/list';
import { ConferencePdfFileAddComponent } from './conference-pdf-file-add/conference-pdf-file-add.component';
import { ConferencePdfFileEditComponent } from './conference-pdf-file-edit/conference-pdf-file-edit.component';

@Component({
  selector: 'app-conference-pdf-file',
  templateUrl: './conference-pdf-file.component.html',
  styleUrls: ['./conference-pdf-file.component.scss']
})
export class ConferencePdfFileComponent {
  response = {} as Upload;
  select: any;
  countries: any;
  textSearch : string | undefined;
  constructor(private dataService : DataService , private http: HttpClient,
  private dialog : MatDialog){
    this.textSearch = ''
    http.get(dataService.apiEndpoint + "/upload_file?join=type_upload_file")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as Upload;
  });

}
//แสดงผลข้อมูล
show(option:MatListOption){
  this.select = option.value;
  console.log(this.select);
}
//เพิ่มข้อมูล
addConference(){
  this.dataService.countries = this.countries;
  this.dialog.open(ConferencePdfFileAddComponent,{
    minWidth:'300px',
  });
}
//แก้ไข
edit(){
  this.dataService.showSelectTypeUpload = this.select;
  console.log(this.dataService.showSelectTypeUpload)
  this.dialog.open(ConferencePdfFileEditComponent,{
    minWidth: '300px',
  });
}
//ลบข้อมูล
deletePersonnel(id : number){
  console.log(id);
  if(confirm("ยันยันการลบข้อมูล ?")==true){
    this.http.delete(this.dataService.apiEndpoint+"/upload_file/" + id)
    .subscribe((res) => {
      console.log(res);
      location.reload();
    });
  }
}
displayResult(text: string) {
  this.textSearch = text;
  if (this.textSearch == '') {
    this.http
      .get(this.dataService.apiEndpoint + '/upload_file?join=type_upload_file')
      .subscribe((data: any) => {
        console.log(data);
        this.response = data as Upload;
      });
  } else {
    this.http
      .get(
        this.dataService.apiEndpoint +
          '/upload_file?join=type_upload_file&filter=name,sw,' +
          this.textSearch
      )
      .subscribe((data: any) => {
        console.log(data);
        this.response = data as Upload;
      });
  }
}
}
