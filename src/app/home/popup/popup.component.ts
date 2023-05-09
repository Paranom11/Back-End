import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataVetAnimal } from 'src/app/model/DataVetAnimal.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  base64 : any;
  response = {} as DataVetAnimal;
  constructor(private data : DataService , private http: HttpClient){
    http.get("https://anihmsu.comsciproject.net/anihmsu/api.php/records/information_anihmsu")
    .subscribe((data : any) => {
      console.log(data);
      this.response = data as DataVetAnimal;
});
}

  getFile(files : FileList){
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.base64 = reader.result;
      console.log(this.base64);
    }
}
 updateImg(idx:number){
  if(confirm("ยืนยันการแก้ไขรูปภาพ") )
  let jsonObj ={
    img_popup : this.base64
  }
  this.http.put(this.data.apiEndpoint+"/information_anihmsu/"+idx,jsonObj,
  {observe:'response'}).subscribe((response : any)=>
  {console.log(JSON.stringify(response.status));
    console.log(JSON.stringify(response.body));
  });
 location.reload();
}
 }

