import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Upload } from 'src/app/model/pdf.model';
import { TypeUpload } from 'src/app/model/type_upload.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-conference-pdf-file-edit',
  templateUrl: './conference-pdf-file-edit.component.html',
  styleUrls: ['./conference-pdf-file-edit.component.scss']
})
export class ConferencePdfFileEditComponent {
    response={} as TypeUpload;
    uplaodFile={} as Upload;
    base64 : any;
    filename : any;
    url : any;
    sizefile : any;
    typefile : any;
    file : any;
    fileD : any;
    date = new Date();
    showSelectTypeUpload : any;
    dateInsert = this.date.getFullYear()+"-"+this.date.getMonth()+"-"+this.date.getDay()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();
    constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<ConferencePdfFileEditComponent>){
       this.showSelectTypeUpload = data.showSelectTypeUpload;

       http.get(data.apiEndpoint + "/type_upload_file")
        .subscribe((data : any) => {
          this.response = data as TypeUpload;
    });
    http.get(data.apiEndpoint + "/upload_file?join=type_upload_file")
    .subscribe((data : any) => {
      this.uplaodFile = data as Upload;
});
    }
    save(name:string, type_upload : string , idx : number){
         console.log(type_upload);
         console.log(idx);
        let jsonObj ={
          name : name,
          id_type_upload : Number(type_upload)  ,
          date : this.dateInsert,
          link : this.base64
      }
      this.http.put(this.data.apiEndpoint + "/upload_file/"+idx
      ,JSON.stringify(jsonObj),{observe:'response'}).subscribe((response: any)=>{
        this.dialogRef.close();
        // location.reload();
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


