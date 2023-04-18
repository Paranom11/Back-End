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
  d : any;
  // const username = document.getElementById("username").value;
  constructor(private dataService : DataService ,private http : HttpClient){
    this.http.get(this.dataService.apiEndpoint + "/admin").subscribe((data : any) => {
      this.admin = amins.toAdmin(JSON.stringify(data));
      this.d = this.admin.records.length;
   });
  }
  findAdmin(email : string , password : string){
    console.log(email + " "+ password + " " + this.d);
    for(let i = 0 ; i < this.d ; i++){
      if(email == this.admin?.records[i].email && password == this.admin.records[i].password ){
          window.location.href = 'home';
      }
      else{
        console.log("NOOOOOOOO");
      }
    }
  }
}
