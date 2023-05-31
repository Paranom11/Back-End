import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Admin } from '../model/admin.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  hide = true;
  idxUser: any;
  response = {} as Admin;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditUserComponent>
  ) {
    this.idxUser = dataService.idxUser;
    console.log(this.idxUser)
    http
      .get(
        dataService.apiEndpoint + '/admin?filter=id_admin,eq,' + this.idxUser
      )
      .subscribe((data: any) => {
        console.log(data);
        this.response = data as Admin;
      });
  }

  editUser(nameAdmin: string, email: string, password: string) {
    if (confirm('ยืนยันการเเก้ไขข้อมูลส่วนตัว!') == true) {
      let jsonObj = {
        name: nameAdmin,
        email: email,
        password: password,
      };
      this.http
        .put(
          this.dataService.apiEndpoint + '/admin/' + this.idxUser,
          JSON.stringify(jsonObj),
          { observe: 'response' }
        )
        .subscribe((response: any) => {
          this.dialogRef.close();
        });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
