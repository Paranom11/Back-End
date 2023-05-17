import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataVetAnimal } from 'src/app/model/DataVetAnimal.model';
import { IdentifyData } from 'src/app/model/identify.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
export class IdentifyComponent {
  response={} as IdentifyData;
  base64 : any;
  filename : any;
  constructor(private data : DataService , private http: HttpClient){
      http.get("https://anihmsu.comsciproject.net/anihmsu/api.php/records/identify")
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
}
