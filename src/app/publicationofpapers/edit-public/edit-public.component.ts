import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { PubilcPapers } from 'src/app/model/pubilc_papers.model';
import { Personnel } from 'src/app/model/personnel.model';
import { write } from 'src/app/model/write.model';
import { EditPersonnelPPComponent } from '../edit-personnel-pp/edit-personnel-pp.component';

@Component({
  selector: 'app-edit-public',
  templateUrl: './edit-public.component.html',
  styleUrls: ['./edit-public.component.scss']
})
export class EditPublicComponent {
  response = {} as write;
  resPersonnel = {} as Personnel;
  selectPP : any;
  PaperBase64 : any;
  base64 : any;
  idxPP : any;
  dateM = 1;
  datePaper = '';
  InsertDate = '';
  dateTime : any;

  constructor(private dataService : DataService , private http: HttpClient,
    private dialog : MatDialog , private dialogRef :MatDialogRef<EditPublicComponent>){
      this.selectPP = dataService.selectPP;
      this.idxPP = dataService.selectPP.id_pubilc_papers
      console.log(this.selectPP);
      http.get(dataService.apiEndpoint + "/write?join=publicationofpapers&publicationofpapers&filter1=id_pubilc_papers,eq,"+this.idxPP)
      .subscribe((data : any) => {
        this.dateTime = data.records[0];
        console.log(this.dateTime);
  });

  }
  getFilePaper(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.PaperBase64 = reader.result;
    };
  }

  getFile(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64 = reader.result;
    };
  }
  
  EditPaper(name_paper:string,datePaper:string,idxPP : number){
    if(confirm("ยืนยันการแก้ไขเอกสารเผยเเพร่") == true){
      let jsonObj = {
         name : name_paper,
         image_pp : this.base64,
         filepath : this.PaperBase64
     }

     let jsonString = JSON.stringify(jsonObj);
     this.http.put(this.dataService.apiEndpoint + "/publicationofpapers/"+idxPP,jsonString,
     {observe:'response'}).subscribe((response: any)=>{
       console.log(JSON.stringify(response.status));
       console.log(JSON.stringify(response.body));
       this.dialogRef.close();
       this.dataService.datePaper = datePaper;
       this.dialog.open(EditPersonnelPPComponent,{
        minWidth:'300px',
      });
     });
   }
  }

  close(){
    this.dialogRef.close();
  }
}
