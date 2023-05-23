import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataVetAnimal } from 'src/app/model/DataVetAnimal.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  response = {} as DataVetAnimal;
  constructor(private data : DataService , private http: HttpClient){
      http.get("https://anihmsu.comsciproject.net/anihmsu/api.php/records/information_anihmsu")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as DataVetAnimal;
  });
}
updateContact(address_th:string,tel:string,email:string,facebook:string,calendar:string,google_Map:string, idx:number){
  let jsonObj ={
    address_th : address_th,
    tel : tel,
    email : email,
    facebook : facebook,
    calendar : calendar,
    google_Map : google_Map,

  }
  if(confirm("ยืนยันการเเก้ไข") == true){
    this.http.put(this.data.apiEndpoint+"/information_anihmsu/"+idx,jsonObj,
    {observe:'response'}).subscribe((response : any)=>
    {console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      location.reload();
    });

  }else{}
  }
}
