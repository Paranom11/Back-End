import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VeterinaryWorkOnly } from 'src/app/model/veterinary_work-Only.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-veterinary',
  templateUrl: './edit-veterinary.component.html',
  styleUrls: ['./edit-veterinary.component.scss']
})
export class EditVeterinaryComponent {
  response = {} as VeterinaryWorkOnly;
  countries: any;
  selected_th: any;
  selected_en: any;
  base64: any;

  constructor(
    private data: DataService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<EditVeterinaryComponent>,
    private dialog: MatDialog
  ) {
    this.countries = data.countries;
    console.log(this.countries.id_type_work);
    http
      .get(
        data.apiEndpoint +
          '/veterinary_work?filter=id_type_work,eq,' +
          this.countries.id_type_work
      )
      .subscribe((data: any) => {
        console.log(this.countries.id_type_work);
        this.response = data as VeterinaryWorkOnly;
      });
  }
  getFile(files: FileList) {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      this.base64 = reader.result;
    };
  }
  close() {
    this.dialogRef.close();
  }
  save(text_th: string, idx: number) {
    let jsonObj = {
      text_th: text_th,
      img: this.base64,
    };
    let jsonString = JSON.stringify(jsonObj);
    this.http
      .put(this.data.apiEndpoint + '/veterinary_work/' + idx, jsonString, {
        observe: 'response',
      })
      .subscribe((response: any) => {
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        this.dialogRef.close();
        location.reload();
      });
  }
  deleteNews(idx: number) {
    this.http.delete(this.data.apiEndpoint+"/veterinary_work/" + idx)
    .subscribe((res) => {
      this.dialogRef.close();
      this.dialog.open(EditVeterinaryComponent,{
        minWidth:'70%',
      });
    });
  }
}
