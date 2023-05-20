import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { News } from 'src/app/model/News.model';
import { NewsOnly } from 'src/app/model/newsOnly.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  response = {} as NewsOnly;
  countries: any;
  selected_th: any;
  selected_en: any;
  base64 : any;

  constructor(private data : DataService,private http:HttpClient, private dialogRef :MatDialogRef<EditComponent>){
    this.countries = data.countries;
    console.log(this.countries.id_type_news);
    http.get(data.apiEndpoint + "/news?filter=id_type_news,eq,"+this.countries.id_type_news)
    .subscribe((data : any) => {
      console.log(this.countries.id_type_news);
      this.response = data as NewsOnly;
});
  }
  getFile(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64 = reader.result;
    };
  }
  close(){
    this.dialogRef.close();
  }
  save(text_th:string , idx : number){
        let jsonObj ={
          text_th : text_th,
          img : this.base64
      }

      let jsonString = JSON.stringify(jsonObj);
      this.http.put(this.data.apiEndpoint + "/news/"+idx,jsonString,
      {observe:'response'}).subscribe((response: any)=>{
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        this.dialogRef.close();
        location.reload();
      });
  }
}
