import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Convert as amins , Admin } from './admin.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  admin : Admin | undefined;
  // const username = document.getElementById("username").value;
  constructor(private dataService : DataService ,private http : HttpClient){

  }
  findAdmin(email : string , password : string){
    this.http.get(this.dataService.apiEndpoint + "/admin").subscribe((data : any) => {
      this.admin = amins.toAdmin(JSON.stringify(data));
   });
    console.log(email + " "+ password);
    for(let i = 0 ; i < 6; i++){
      if(email == this.admin?.records[i].email ){
          window.location.href = 'http://localhost:4200/home';
      }
      else{
        console.log("NOOOOOOOO");
      }
    }
  }
}
