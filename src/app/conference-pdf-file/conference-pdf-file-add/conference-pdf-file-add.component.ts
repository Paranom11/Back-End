import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../service/data.service';
import { ConferencePdfFileComponent } from '../conference-pdf-file.component';
import { formatDate } from '@angular/common';
import { Upload } from 'src/app/model/pdf.model';
import { TypeUpload } from 'src/app/model/type_upload.model';

@Component({
  selector: 'app-conference-pdf-file-add',
  templateUrl: './conference-pdf-file-add.component.html',
  styleUrls: ['./conference-pdf-file-add.component.scss']
})
export class ConferencePdfFileAddComponent {

  response={} as TypeUpload;
  base64 : any;
  filename : any;
  url : any;
  sizefile : any;
  typefile : any;
  file : any;
  fileD : any;
  oldSelect : any;
  date = new Date();
  dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();
  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<ConferencePdfFileAddComponent>){
    http.get(data.apiEndpoint + "/type_upload_file")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as TypeUpload;
  });
  }
  addNew(name:string, type_upload : number){
       console.log(type_upload);
      let jsonObj ={
        name : name,
        id_type_upload : type_upload  ,
        date : this.dateInsert,
        linkfile : this.base64
    }
    this.http.post(this.data.apiEndpoint + "/upload_file"
    ,JSON.stringify(jsonObj),{observe:'response'}).subscribe((response: any)=>{
      this.dialogRef.close();
      location.reload();
    });
  }
  close(){
    this.dialogRef.close();
  }
  getFile(files : FileList){
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
     // console.log(reader.result);

      this.base64 = reader.result;
    };
  }
}
function setTimezone(arg0: any) {
  throw new Error('Function not implemented.');
}

function padTo2Digits(arg0: number) {
  throw new Error('Function not implemented.');
}

