import { Component } from '@angular/core';
import { Agency } from '../model/agency.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { TypeAgency } from '../model/type_agency.model';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent {
  response = {} as TypeAgency;
  response1 = {} as Agency;
  oldSelect : any;
  filename : any;
  constructor(private dataService : DataService , private http: HttpClient){

  http.get(dataService.apiEndpoint +"/type_agency")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as TypeAgency;
  });
}

update(name_agency_th : string , name_agency_en : string ,link : string,idx : number){
  let jsonObj ={
    name_agency_th: name_agency_th,
    name_agency_en: name_agency_en,
    link  :  link
  }
  if (confirm("ยืนยันการเเก้ไข!") == true) {
    this.http.put(this.dataService.apiEndpoint+"/agency/"+idx,jsonObj,
    {observe:'response'}).subscribe((response : any)=>
    {console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      location.reload();
    });

  } else {
  }
}
show(idx:number){
  this.http.get(this.dataService.apiEndpoint +"/agency?join=type_agency&filter=id_type_agency,eq,"+idx)
  .subscribe((data : any) => {
    console.log(data);
     this.response1 = data as Agency;
});
}
 }
