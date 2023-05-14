import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../service/data.service';
import { ConferencePdfFileComponent } from '../conference-pdf-file/conference-pdf-file.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-conference-pdf-file-add',
  templateUrl: './conference-pdf-file-add.component.html',
  styleUrls: ['./conference-pdf-file-add.component.scss']
})
export class ConferencePdfFileAddComponent {

  response={} as ConferencePdfFileComponent;
  base64 : any;
  filename : any;
  url : any;
  sizefile : any;
  typefile : any;
  file : any;
  date = new Date();
  dateNew : any;
  fileD : any;
  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<ConferencePdfFileAddComponent>){
    this.response = data.con;

    function padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    }
    function formatDate(date: Date) {
      return (
        [
          date.getFullYear(),
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
        ].join('-') +
        ' ' +
        [
          padTo2Digits(date.getHours()),
          padTo2Digits(date.getMinutes()),
          padTo2Digits(date.getSeconds()),
        ].join(':')
      );
    }

    const result = formatDate(new Date());
    this.dateNew = result;
    // console.log(result);

  }
  addNew(name:string){
      console.log(this.file);
      let jsonObj ={
        name : name,
        date : this.dateNew,
        linkfile : this.base64
    }
    this.http.post(this.data.apiEndpoint + "/conference_pdf_file",JSON.stringify(jsonObj),
    {observe:'response'}).subscribe((response: any)=>{
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

