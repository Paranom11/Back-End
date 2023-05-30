import { Component } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog){

  }
  editUser(){
    this.dialog.open(EditUserComponent,{
      minWidth: '300px'
    });
  }
}
