import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.scss']
})
export class ShowPasswordComponent {
  showadmin : any;

  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog, private router : Router , private dialogRef : MatDialogRef<ShowPasswordComponent>){
    this.showadmin = dataService.showPassword;
    console.log(this.showadmin)
}
}
