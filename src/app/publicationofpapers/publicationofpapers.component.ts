import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { DataService } from '../service/data.service';
import { PubilcPapers } from '../model/pubilc_papers.model';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AddPublicComponent } from './add-public/add-public.component';
import { EditPublicComponent } from './edit-public/edit-public.component';
import { EditPersonnelPPComponent } from './edit-personnel-pp/edit-personnel-pp.component';
import { write } from '../model/write.model';

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
  writeSelect = {} as write
  constructor(private dataService : DataService , private http: HttpClient,
  private dialog : MatDialog){
    http.get(dataService.apiEndpoint + "/publicationofpapers")
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
editPublic(){
  this.dataService.selectPP = this.select;
  this.dialog.open(EditPublicComponent,{
    minWidth:'300px',
  });
}

delectPP(idx : number){
  if(confirm("ยันยันการลบเอกสารเผยเเพร่?") == true){
    this.http.delete(this.dataService.apiEndpoint+"/publicationofpapers/" + idx)
    .subscribe((res) => {
      console.log(res);
      location.reload();
    });
  }
}



//แสดงผลข้อมูล
show(option:MatListOption){
  this.select = option.value;
  console.log(this.select);
  this.http.get(this.dataService.apiEndpoint + "/write?join=personnel&join=publicationofpapers&publicationofpapers&filter1=id_pubilc_papers,eq,"+this.select.id_pubilc_papers)
  .subscribe((data : any) => {
    console.log(data);
    this.writeSelect = data as write;
});
}
}
