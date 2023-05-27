import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { Personnel } from 'src/app/model/personnel.model';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-add-public-personnel',
  templateUrl: './add-public-personnel.component.html',
  styleUrls: ['./add-public-personnel.component.scss'],
})
export class AddPublicPersonnelComponent {
   datePaper : any;
   indexMax : any;
   response={} as Personnel;
   select : any;
   valuesss : any;

   constructor(private dateService : DataService,private http:HttpClient, private dialog : MatDialog, private dialogRef :MatDialogRef<AddPublicPersonnelComponent>){
      this.datePaper = dateService.datePaper;
      http.get(dateService.apiEndpoint + "/publicationofpapers?include=id_pubilc_papers&order=id_pubilc_papers,desc")
      .subscribe((data : any) => {
        this.indexMax = data.records[0].id_pubilc_papers
  });

    http.get(dateService.apiEndpoint + "/personnel")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as Personnel;
  });
   }
   addPaperPersonnel(option:string){
    this.select = option;
    console.log(this.select);
   }

   show(option:string){
    // this.select = option;
    // console.log(this.select);
  }

   close(){
    this.dialogRef.close();
    this.http.delete(this.dateService.apiEndpoint+"/publicationofpapers/" + this.indexMax)
    .subscribe((res) => {
      console.log(res);
      location.reload();
    });
   }

}
