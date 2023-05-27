import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { DataService } from '../service/data.service';
import { PubilcPapers } from '../model/pubilc_papers.model';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AddPublicComponent } from './add-public/add-public.component';

@Component({
  selector: 'app-publicationofpapers',
  templateUrl: './publicationofpapers.component.html',
  styleUrls: ['./publicationofpapers.component.scss']
})
export class PublicationofpapersComponent {
  select :any;
  countries: any;
  PersonnelSelected : any;
  response = {} as PubilcPapers;
  constructor(private dataService : DataService , private http: HttpClient,
  private dialog : MatDialog){
    http.get(dataService.apiEndpoint + "/write?join=publicationofpapers&join=personnel")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as PubilcPapers;
  });
}
addPublicPaper(){
  this.dialog.open(AddPublicComponent,{
    minWidth:'300px',
  });
}
//แสดงผลข้อมูล
show(option:MatListOption){
  this.select = option.value;
  console.log(this.select);
}
}
