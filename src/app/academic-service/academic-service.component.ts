import { Component } from '@angular/core';
import { TypeAcademicService } from '../model/type_academic_service.model';
import { AcademicService } from '../model/academic_service.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { AddTypeacademicComponent } from './add-typeacademic/add-typeacademic.component';
import { EditTypeacademicComponent } from './edit-typeacademic/edit-typeacademic.component';
import { EditacademicComponent } from './editacademic/editacademic.component';


@Component({
  selector: 'app-academic-service',
  templateUrl: './academic-service.component.html',
  styleUrls: ['./academic-service.component.scss']
})
export class AcademicServiceComponent {
  select : any
  response={} as AcademicService;
  typeacademicservice={} as TypeAcademicService;
  textSearch : string | undefined;

  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog){
    this.textSearch = '';
    http.get(dataService.apiEndpoint + "/academic_service?join=type_academic_service")
    .subscribe((data : any) => {
      console.log(data);
      this.response = data as AcademicService;
});

    http.get(dataService.apiEndpoint + "/type_academic_service")
    .subscribe((data : any) => {
      console.log(data);
      this.typeacademicservice = data as TypeAcademicService;
  });
}
//show
  show(option:MatListOption){
    this.select = option.value;
    console.log(this.select);
  }
  //เพิ่มข้อมูล
  addAcademic(){
    this.dataService.academicSelect = this.select;
    this.dialog.open(AddTypeacademicComponent,{
      minWidth:'300px',
    });
  }
  deleteAcademic(idx:number){
    if(confirm("ยันยันการลบข้อมูล ?")){
      this.http.delete(this.dataService.apiEndpoint+"/type_academic_service/" + idx)
      .subscribe((res) => {
        console.log(res);
        location.reload();
      });
    }
  }
  editTypeAcademic(){
    this.dataService.academicSelect = this.select;
    this.dialog.open(EditTypeacademicComponent,{
      minWidth:'300px',
    });
  }
  edit(){
    this.dataService.academicSelect = this.select;
    this.dialog.open(EditacademicComponent,{
      minWidth:'70%',
    });
  }

  displayResult(text: string) {
    this.textSearch = text;
    if (this.textSearch == '') {
      this.http
        .get(this.dataService.apiEndpoint + '/type_academic_service')
        .subscribe((data: any) => {
          console.log(data);
          this.typeacademicservice = data as TypeAcademicService;
        });
    } else {
      this.http
        .get(
          this.dataService.apiEndpoint +
            '/type_academic_service?filter=type_th,sw,' +
            this.textSearch
        )
        .subscribe((data: any) => {
          console.log(data);
          this.typeacademicservice = data as TypeAcademicService;
        });
    }
  }
}
