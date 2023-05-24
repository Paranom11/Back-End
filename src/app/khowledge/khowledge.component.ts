import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Khowledge } from '../model/khowledge.model';
import { Type_Khowledge } from '../model/type_khowledge.model';
import { AddKhowledgeComponent } from './add-khowledge/add-khowledge.component';
import { EditTypeKhowledgeComponent } from './edit-type-khowledge/edit-type-khowledge.component';
import { EditkhowledgeComponent } from './editkhowledge/editkhowledge.component';

@Component({
  selector: 'app-khowledge',
  templateUrl: './khowledge.component.html',
  styleUrls: ['./khowledge.component.scss']
})
export class KhowledgeComponent {
  select : any
  response={} as Khowledge;
  typeKhowledge={} as Type_Khowledge;

  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog){
    http.get(dataService.apiEndpoint + "/knowledge?join=type_knowledge")
    .subscribe((data : any) => {
      console.log(data);
      this.response = data as Khowledge;
});

    http.get(dataService.apiEndpoint + "/type_knowledge")
    .subscribe((data : any) => {
      console.log(data);
      this.typeKhowledge = data as Type_Khowledge;
  });
}
  show(option:MatListOption){
    this.select = option.value;
    console.log(this.select);
  }
  addKhowledge(){
    this.dataService.khowledgeSelect = this.select;
    this.dialog.open(AddKhowledgeComponent,{
      minWidth:'300px',
    });
  }
  deleteNews(idx:number){
    if(confirm("ยันยันการลบข้อมูล ?")){
      this.http.delete(this.dataService.apiEndpoint+"/type_knowledge/" + idx)
      .subscribe((res) => {
        console.log(res);
        location.reload();
      });
    }
  }
  editTypeNews(){
    this.dataService.khowledgeSelect = this.select;
    this.dialog.open(EditTypeKhowledgeComponent,{
      minWidth:'300px',
    });
  }
  edit(){
    this.dataService.khowledgeSelect = this.select;
    this.dialog.open(EditkhowledgeComponent,{
      minWidth:'70%',
    });
  }

  }

