import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Personnel } from 'src/app/model/personnel.model';
import { IDStationed, stationed } from 'src/app/model/stationed.model';
import { stationedID } from 'src/app/model/stationedID.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-duty-personnel',
  templateUrl: './add-duty-personnel.component.html',
  styleUrls: ['./add-duty-personnel.component.scss']
})
export class AddDutyPersonnelComponent {
  response = {} as Personnel;
  response2 = {} as stationedID;
  MaxIndex : any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog,private dialogRef :MatDialogRef<AddDutyPersonnelComponent>){
    http.get(dataService.apiEndpoint + "/personnel")
    .subscribe((data : any) => {
      this.response = data as Personnel;
});

http.get(dataService.apiEndpoint + "/stationed?include=id_stationed&order=id_stationed,desc")
    .subscribe((data2 : any) => {
      console.log(data2);
      this.response2 = data2 as stationedID
      this.MaxIndex = this.response2.records[0].id_stationed;
});

  }

  addPersonnelStation(selectPersonnel : number){
     let jsonObj ={
      id_personnel : selectPersonnel,
      id_stationed : this.MaxIndex,
      date : this.dateInsert
}

this.http.post(this.dataService.apiEndpoint + "/guard",JSON.stringify(jsonObj),
{observe:'response'}).subscribe((response: any)=>{
  this.dialogRef.close();
  location.reload();
});
  }

  close(){
    this.dialogRef.close();
  }
}
