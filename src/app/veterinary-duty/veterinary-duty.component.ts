import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { stationed } from '../model/stationed.model';
import { Personnel } from '../model/personnel.model';
import { AddDutyComponent } from './add-duty/add-duty.component';
import { EditDutyComponent } from './edit-duty/edit-duty.component';

@Component({
  selector: 'app-veterinary-duty',
  templateUrl: './veterinary-duty.component.html',
  styleUrls: ['./veterinary-duty.component.scss'],
})
export class VeterinaryDutyComponent {
  select: any;
  response = {} as Personnel;
  response2 = {} as stationed;
  personnelDuty: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    http
      .get(dataService.apiEndpoint + '/personnel')
      .subscribe((data: any) => {
        this.response = data as Personnel;
      });
  }
  // /
  show(option: MatListOption) {
    this.dataService.personnelDuty = option.value;
    console.log(this.dataService.personnelDuty.id_personnel);

    this.http
    .get(
      this.dataService.apiEndpoint +
        '/guard?join=stationed&join=personnel&filter=id_personnel,eq,' +
        this.dataService.personnelDuty.id_personnel
    )
    .subscribe((data: any) => {
      this.response2 = data as stationed;
    });
   }
   addStationed(){
    this.dialog.open(AddDutyComponent,{
      minWidth:'300px',
    });
   }

   edit(idx : number){
    this.dataService.stationedDuty = idx;
    this.dialog.open(EditDutyComponent,{
      minWidth: '300px',
    });
   }
   deletePersonnel(){

   }
}

