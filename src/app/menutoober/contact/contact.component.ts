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
updateContact(address_th:string,tel_1:string,email:string,facebook:string,calendar:string,idx:number){
  let jsonObj ={
    address_th : address_th,
    tel : tel_1,
    email : email,
    facebook : facebook,
    calendar : calendar

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
