import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Personnel } from 'src/app/model/personnel.model';
import { write } from 'src/app/model/write.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-personnel-pp',
  templateUrl: './edit-personnel-pp.component.html',
  styleUrls: ['./edit-personnel-pp.component.scss']
})
export class EditPersonnelPPComponent {
  selectPP : any;
  idxPP : any;
  response = {} as write;
  resPersonnel = {} as Personnel;
  PaperBase64 : any;
  base64 : any;
  dateM = 1;
  datePaper : any;
  InsertDate = '';

  constructor(private dataService : DataService , private http: HttpClient,
    private dialog : MatDialog , private dialogRef :MatDialogRef<EditPersonnelPPComponent>){
      var date = new Date(dataService.datePaper);
      this.dateM = this.dateM + Number(date.getMonth());
      this.datePaper = date.getFullYear()+"-"+this.dateM+"-"+date.getDate();

      this.InsertDate = this.datePaper.replaceAll('/','-');
      console.log(this.InsertDate)



      this.selectPP = dataService.selectPP;
      this.idxPP = dataService.selectPP.id_pubilc_papers

      http.get(dataService.apiEndpoint + "/personnel")
      .subscribe((data : any) => {
        console.log(data);
        this.resPersonnel = data as Personnel;
  });

  http.get(dataService.apiEndpoint + "/write?join=personnel&join=publicationofpapers&publicationofpapers&filter1=id_pubilc_papers,eq,"+this.idxPP)
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as write;
  });
}

addPaperPersonnel(selectPerson : number , idx : number){
  console.log(selectPerson)
  console.log(idx)
  if(confirm("ยืนยันการแก้ไขบุคลากร") == true){
    let jsonObj = {
      id_personnel : selectPerson,
      id_pubilc_papers : this.idxPP,
      date : this.InsertDate
   }

   let jsonString = JSON.stringify(jsonObj);
   this.http.put(this.dataService.apiEndpoint + "/write/"+idx,jsonString,
   {observe:'response'}).subscribe((response: any)=>{
     console.log(JSON.stringify(response.status));
     console.log(JSON.stringify(response.body));

    });
 }
}

close(){
  this.dialogRef.close();
}

reload(){
   this.dialogRef.close();
     location.reload();
}

}
