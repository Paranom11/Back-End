import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { AddDutyPersonnelComponent } from '../add-duty-personnel/add-duty-personnel.component';
import { Personnel } from 'src/app/model/personnel.model';

@Component({
  selector: 'app-add-duty',
  templateUrl: './add-duty.component.html',
  styleUrls: ['./add-duty.component.scss']
})
export class AddDutyComponent {
  response = {} as Personnel;
  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog,private dialogRef :MatDialogRef<AddDutyComponent>){
    http.get(dataService.apiEndpoint + "/personnel")
    .subscribe((data : any) => {
      console.log(data);
      this.response = data as Personnel;
});
}

addStationed(dateDuty:string,date_start:string,date_end:string){
  let jsonObj ={
    datail_stationed	:dateDuty,
    date_start : date_start,
    date_end : date_end
}

this.http.post(this.dataService.apiEndpoint + "/stationed",JSON.stringify(jsonObj),
{observe:'response'}).subscribe((response: any)=>{
  this.dialogRef.close();
  this.dialog.open(AddDutyPersonnelComponent,{
    minWidth:'300px',
  });
});
}

close(){
  this.dialogRef.close();
}
}
