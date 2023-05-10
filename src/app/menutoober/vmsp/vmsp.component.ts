import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataVetAnimal } from 'src/app/model/DataVetAnimal.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-vmsp',
  templateUrl: './vmsp.component.html',
  styleUrls: ['./vmsp.component.scss']
})
export class VMSPComponent {
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
updateVMSP(vision_th : string , vision_en : string ,mission_th : string,mission_en : string,strategy_th : string ,strategy_en : string,agency_th : string,agency_en : string,idx : number){
  let jsonObj ={
    img_VMSA : this.base64,
    vision_th : vision_th,
    vision_en : vision_en,
    mission_th : mission_th,
    mission_en : mission_en,
    strategy_th : strategy_th,
    strategy_en : strategy_en,
    agency_th : agency_th,
    agency_en : agency_en

  }
  if (confirm("ยืนยันการเเก้ไข!") == true) {
    this.http.put(this.data.apiEndpoint+"/information_anihmsu/"+idx,jsonObj,
    {observe:'response'}).subscribe((response : any)=>
    {console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      location.reload();
    });

  } else {
  }


}
}
