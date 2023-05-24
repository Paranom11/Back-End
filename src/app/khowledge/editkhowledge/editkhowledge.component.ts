import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Khowledge } from 'src/app/model/khowledge.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-editkhowledge',
  templateUrl: './editkhowledge.component.html',
  styleUrls: ['./editkhowledge.component.scss']
})
export class EditkhowledgeComponent {
  [x: string]: any;
  base64 :any;
  khowledgeSelect : any;
  response={} as Khowledge;
  constructor(private data : DataService,private http:HttpClient,private dialog: MatDialog, private dialogRef :MatDialogRef<EditkhowledgeComponent>){
    this.khowledgeSelect = data.khowledgeSelect;
    console.log(this.khowledgeSelect.id_type_kl);
    http
      .get(
        data.apiEndpoint +
          '/knowledge?filter=id_type_kl,eq,' +
          this.khowledgeSelect.id_type_kl
      )
      .subscribe((data: any) => {
        console.log(this.khowledgeSelect.id_type_kl);
        this.response = data as Khowledge;
      });
}
getFile(files : FileList){
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => {
    this.base64 = reader.result;
  };
}
save(text_th: string, idx: number) {
  let jsonObj = {
    text_th: text_th,
    img: this.base64,
  };
  let jsonString = JSON.stringify(jsonObj);
  this.http
    .put(this.data.apiEndpoint + '/knowledge/' + idx, jsonString, {
      observe: 'response',
    })
    .subscribe((response: any) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
      location.reload();
    });
}
deleteNews(idx: number) {
  this.http.delete(this.data.apiEndpoint+"/knowledge/" + idx)
  .subscribe((res) => {
    this.dialogRef.close();
    this.dialog.open(EditkhowledgeComponent,{
      minWidth:'70%',
    });
  });
}


close(){
    this.dialogRef.close();
  }
}
