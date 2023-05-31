import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { ShowPasswordComponent } from './show-password/show-password.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  showPassword : any;
  constructor(private dataService : DataService ,private http : HttpClient, private router: Router,
    private dialog: MatDialog){}
    showPass(email : string){
      this.http.get(this.dataService.apiEndpoint + "/admin?filter=email,eq,"+email)
      .subscribe((data : any)=>{
        let response = data as Admin;
        if (response.records.length == 1){
          this.dataService.showPassword = response
          this.dialog.open(ShowPasswordComponent,{
            minWidth :'300px'
          });
        }else{
          // console.log('Login failed');
          // this.dialog.open(LoginWarnComponent,{
          //   minWidth :'300px'
          // });
        }
      });
    }
}
