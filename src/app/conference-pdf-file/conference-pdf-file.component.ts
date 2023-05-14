import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Conferenc } from '../model/conference.model';
import { DataService } from '../service/data.service';
import { MatListOption } from '@angular/material/list';
import { ConferencePdfFileAddComponent } from '../conference-pdf-file-add/conference-pdf-file-add.component';

@Component({
  selector: 'app-conference-pdf-file',
  templateUrl: './conference-pdf-file.component.html',
  styleUrls: ['./conference-pdf-file.component.scss']
})
export class ConferencePdfFileComponent {
  response = {} as Conferenc;
  select: any;
  countries: any;
  constructor(private dataService : DataService , private http: HttpClient,
  private dialog : MatDialog){
    http.get(dataService.apiEndpoint + "/conference_pdf_file?join=admin")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as Conferenc;
  });

}
//แสดงผลข้อมูล
show(option:MatListOption){
  this.select = option.value;
  console.log(this.select);
}
//เพิ่มข้อมูล
addNew(){
  this.dataService.countries = this.countries;
  this.dialog.open(ConferencePdfFileAddComponent,{
    minWidth:'300px',
  });
}
}
