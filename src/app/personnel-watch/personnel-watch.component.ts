import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../model/personnel.model';

@Component({
  selector: 'app-personnel-watch',
  templateUrl: './personnel-watch.component.html',
  styleUrls: ['./personnel-watch.component.scss']
})
export class PersonnelWatchComponent {
  response = {} as Personnel;
  constructor(private dataService : DataService , private http: HttpClient){
      http.get(dataService.apiEndpoint + "/personnel")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as Personnel;
  });

}
}
