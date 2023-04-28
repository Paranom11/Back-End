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
  constructor(private dataService : DataService , private http: HttpClient){
      http.get("https://anihmsu.comsciproject.net/anihmsu/api.php/records/information_anihmsu")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as DataVetAnimal;
  });
}
updateHistory(history_th_new : String ){
  this.http.put("https://anihmsu.comsciproject.net/anihmsu/api.php/records/information_anihmsu/"+this.response.records[0].id_anihmsu,{
   "email" : "AAAA"
  })
}
}
