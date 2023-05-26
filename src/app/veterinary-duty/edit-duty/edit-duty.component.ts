import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { stationedOnly } from 'src/app/model/stationedOnly.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-duty',
  templateUrl: './edit-duty.component.html',
  styleUrls: ['./edit-duty.component.scss'],
})
export class EditDutyComponent {
  response = {} as stationedOnly;
  idx: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditDutyComponent>
  ) {
    this.idx = dataService.stationedDuty;
    http
      .get(dataService.apiEndpoint + '/stationed/' + this.idx)
      .subscribe((data: any) => {
        console.log(data);
        this.response = data as stationedOnly;
      });
  }

  save(valueDay: string, date_start: string, date_end: string) {
    if (confirm('ยืนยันการเเก้ไขเวรสัตวเเพทย์?') == true) {
      let jsonObj = {
        datail_stationed: valueDay,
        date_start: date_start,
        date_end: date_end,
      };

      let jsonString = JSON.stringify(jsonObj);
      this.http
        .put(
          this.dataService.apiEndpoint + '/stationed/' + this.idx,
          jsonString,
          { observe: 'response' }
        )
        .subscribe((response: any) => {
          console.log(JSON.stringify(response.status));
          console.log(JSON.stringify(response.body));
          this.dialogRef.close();
          location.reload();
        });
    }
  }
  close() {
    this.dialogRef.close();
  }
}
