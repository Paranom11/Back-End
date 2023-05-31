import { Component } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatListOption } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { PersonnelNewComponent } from '../personnel-new/personnel-new.component';
import { PersonnelEditComponent } from '../personnel-edit/personnel-edit.component';
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss'],
})
export class PersonnelComponent {
  select: any;
  countries: any;
  PersonnelSelected: any;
  response = {} as Personnel;
  textSearch: string | undefined;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.textSearch = '';
    http.get(dataService.apiEndpoint + '/personnel').subscribe((data: any) => {
      console.log(data);
      this.response = data as Personnel;
    });
  }
  //ลบข้อมูล
  deletePersonnel(id: number) {
    if (confirm('ยันยันการลบข้อมูล ?') == true) {
      this.http
        .delete(this.dataService.apiEndpoint + '/personnel/' + id)
        .subscribe((res) => {
          console.log(res);
          location.reload();
        });
    }
  }
  //เพิ่มข้อมูล
  addNew() {
    this.dialog.open(PersonnelNewComponent, {
      minWidth: '300px',
    });
  }
  //แสดงผลข้อมูล
  show(option: MatListOption) {
    this.select = option.value;
    console.log(this.select);
  }
  //แก้ไขข้อมูล
  edit() {
    this.dataService.countries = this.select;
    this.dialog.open(PersonnelEditComponent, {
      minWidth: '300px',
    });
  }

  displayResult(text: string) {
    this.textSearch = text;
    console.log(this.textSearch);


    if (this.textSearch == '') {
      this.http
        .get(this.dataService.apiEndpoint + '/personnel')
        .subscribe((data: any) => {
          console.log(data);
          this.response = data as Personnel;
        });
    } else {
      this.http
        .get(
          this.dataService.apiEndpoint +
            'personnel?filter=name_th,sw,'+this.textSearch
        )
        .subscribe((data: any) => {
          console.log(data);
          this.response = data as Personnel;
        });
    }
  }
}
