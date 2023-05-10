import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataVetAnimal } from 'src/app/model/DataVetAnimal.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
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
  let jsonObj ={
    img_department_structure : this.base64
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
