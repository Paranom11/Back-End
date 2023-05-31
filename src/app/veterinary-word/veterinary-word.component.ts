import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { DataService } from '../service/data.service';
import { VeterinaryWork } from '../model/veterinary_work.model';
import { HttpClient } from '@angular/common/http';
import { InsertVeterinaryComponent } from './insert-veterinary/insert-veterinary.component';
import { EditTypeVeterinaryComponent } from './edit-type-veterinary/edit-type-veterinary.component';
import { TypeWork } from '../model/type_work.model';
import { EditVeterinaryComponent } from './edit-veterinary/edit-veterinary.component';

@Component({
  selector: 'app-veterinary-word',
  templateUrl: './veterinary-word.component.html',
  styleUrls: ['./veterinary-word.component.scss']
})
export class VeterinaryWordComponent {
  response = {} as VeterinaryWork;
  response1 = {} as TypeWork;
  select: any;
  countries: any;
  base64 : any;
  typeWork : any;
  textSearch : string | undefined;

  constructor(private dataService : DataService , private http: HttpClient,
  private dialog : MatDialog){
    this.textSearch = '';
    http.get(dataService.apiEndpoint + "/veterinary_work?join=type_work")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as VeterinaryWork;
  }),
  http.get(dataService.apiEndpoint + "/type_work")
      .subscribe((data : any) => {
        console.log(data);
        this.response1 = data as TypeWork;
    });

}
//แสดงผลข้อมูล
show(option:MatListOption){
  this.select = option.value;
  console.log(this.select);
}
//เพิ่มข้อมูล

addVeterinary(){
  this.dataService.countries = this.countries;
  this.dialog.open(InsertVeterinaryComponent,{
    minWidth:'300px',
  });
}
//แก้ไข
edit(){
  this.dataService.countries = this.select;
  this.dialog.open(EditVeterinaryComponent,{
    minWidth: '70%',
  });
}

editTypeword(){
  this.dataService.typeWork=this.select;
  this.dialog.open(EditTypeVeterinaryComponent,{
    minWidth: '300px',
  });
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
//ลบข้อมูล
deletework(idx:number){
  if(confirm("ยันยันการลบข้อมูล ?")){
    this.http.delete(this.dataService.apiEndpoint+"/type_work/" + idx)
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
      .get(this.dataService.apiEndpoint + '/type_work')
      .subscribe((data: any) => {
        console.log(data);
        this.response1 = data as TypeWork;
      });
  } else {
    this.http
      .get(
        this.dataService.apiEndpoint +
          '/type_work?filter=type_th,sw,' +
          this.textSearch
      )
      .subscribe((data: any) => {
        console.log(data);
        this.response1 = data as TypeWork;
      });
  }
}
}
