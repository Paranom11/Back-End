import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { DataVetAnimal } from '../model/DataVetAnimal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  response = {} as DataVetAnimal;
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

  //location.reload();

}

updateHistory(history_th_new : String , history_en_new : string , idx : number ){
  let jsonObj ={
    img_history : this.base64,
    history_th : history_en_new,
    history_en : history_th_new

  }
  this.http.put(this.data.apiEndpoint+"/information_anihmsu/"+idx,jsonObj,
  {observe:'response'}).subscribe((response : any)=>
  {console.log(JSON.stringify(response.status));
    console.log(JSON.stringify(response.body));
  });
  location.reload();
}
}
