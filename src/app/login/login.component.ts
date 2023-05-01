import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  // const username = document.getElementById("username").value;
  constructor(private dataService : DataService ,private http : HttpClient, private router: Router){}
  findAdmin(email : string , password : string){
   // console.log(email + " "+ password);
    // https://anihmsu.comsciproject.net/anihmsu/api.php/records/admin?filter=email,eq,6211@msu.ac.th&filter=password,eq,1111111&exclude=password

    this.http.get(this.dataService.apiEndpoint + "/admin?filter=email,eq,"+email+"&filter=password,eq,"
    +password +"&exclude=password")
    .subscribe((data : any)=>{
      let response = data as Admin;
      if (response.records.length == 1){
        this.router.navigateByUrl('/home');
      }else{
        console.log('Login failed');

      }
    });
    }
}
