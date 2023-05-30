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
   datePaper = '';
   indexMax : any;
   response={} as Personnel;
   select : any;
   valuesss : any;
   idxList:number[] = [];
   InsertDate = '';
   dateM = 1




   constructor(private dateService : DataService,private http:HttpClient, private dialog : MatDialog, private dialogRef :MatDialogRef<AddPublicPersonnelComponent>){
    var date = new Date(dateService.datePaper);
    this.dateM = this.dateM + Number(date.getMonth());
    this.datePaper = date.getFullYear()+"-"+this.dateM+"-"+date.getDate();

      this.InsertDate = this.datePaper.replaceAll('/','-');
      console.log(this.InsertDate);

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
   addPaperPersonnel(namePersonnel : number){
    var str = String(namePersonnel);
    var splitted = str.split(',');
    console.log(this.datePaper);

    for(let i = 0 ; i<splitted.length; i++){
    let jsonObj ={
      id_personnel : Number(splitted[i]),
      id_pubilc_papers  : this.indexMax,
      date : this.InsertDate

    }
    this.http.post(this.dateService.apiEndpoint + "/write",JSON.stringify(jsonObj),
    {observe:'response'}).subscribe((response: any)=>{
     this.dialogRef.close();
      location.reload();
    });
    }

   }

  //  addPaperPersonnel(option:string){
  //   this.select = option;
  //   console.log(this.select);
  //  }

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
