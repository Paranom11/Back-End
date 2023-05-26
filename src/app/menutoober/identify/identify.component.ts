import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataVetAnimal } from 'src/app/model/DataVetAnimal.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
export class IdentifyComponent {
  response={} as DataVetAnimal;
  base64 : any;
  filename : any;
  constructor(private data : DataService , private http: HttpClient){
      http.get("https://anihmsu.comsciproject.net/anihmsu/api.php/records/information_anihmsu")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as DataVetAnimal;
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
  }
  save(idx : number){
    if(confirm("ยืนยันการเเก้ไขรูปภาพชันสูตร?") == true){
      let jsonObj = {
        Identify_img: this.base64,
      };
      let jsonString = JSON.stringify(jsonObj);
      this.http
        .put(this.data.apiEndpoint + '/information_anihmsu/' + idx, jsonString, {
          observe: 'response',
        })
        .subscribe((response: any) => {
          console.log(JSON.stringify(response.status));
          console.log(JSON.stringify(response.body));
          location.reload();
        });
    }
  }
}
