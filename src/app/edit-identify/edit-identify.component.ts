import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { IdentifyData } from '../model/identify.model';
import { identity } from 'rxjs';

@Component({
  selector: 'app-edit-identify',
  templateUrl: './edit-identify.component.html',
  styleUrls: ['./edit-identify.component.scss']
})
export class EditIdentifyComponent {
  response={} as IdentifyData;
  base64 : any;
  filename : any;
  value : any
  constructor(private data : DataService , private http: HttpClient){
      http.get("https://anihmsu.comsciproject.net/anihmsu/api.php/records/identify?join=image_identify")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as IdentifyData;
  });
  }
  getFile(files : FileList){
    let file = files.item(0);
    this.filename = file?.name;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64 = reader.result;
      console.log(this.base64);
    }

    //location.reload();

  }
  save(text_th : string,text_en :string,idx:number){
      let jsonObjImg ={
        img : this.base64
    }
    this.http.put(this.data.apiEndpoint + "/image_identify"+idx,JSON.stringify(jsonObjImg),
    {observe:'response'}).subscribe((response: any)=>{
      location.reload();
    });

   // let id_imgidentify = ;

  }
}

