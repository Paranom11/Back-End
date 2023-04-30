import { Component } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import {MatListOption} from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { PersonnelNewComponent } from '../personnel-new/personnel-new.component';
import { PersonnelEditComponent } from '../personnel-edit/personnel-edit.component';
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent {

  select :any;
  countries: any;
  PersonnelSelected : any;
  response = {} as Personnel;
  constructor(private dataService : DataService , private http: HttpClient,
  private dialog : MatDialog){
    http.get(dataService.apiEndpoint + "/personnel")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as Personnel;
  });
}
deletePersonnel(id : number){
  if(confirm("ยันยันการลบข้อมูล ?")){
    this.http.delete(this.dataService.apiEndpoint+"/personnel/" + id)
    .subscribe((res) => {
      console.log(res);
      location.reload();
    });
  }
}

addNew(){
  this.dataService.countries = this.countries;
  this.dialog.open(PersonnelNewComponent,{
    minWidth:'300px',
  });
}
show(option:MatListOption){
  this.select = option.value;
  console.log(this.select);
}
edit(){
 // console.log(this.PersonnelSelected);
  this.dataService.countries = this.select;
 // console.log("BBB : "+this.dataService.PersonnelSelected.name_th);
  console.log("AAA :S"+this.dataService.countries.name_th)
  this.dialog.open(PersonnelEditComponent,{
    minWidth: '300px',
  });
}
}
