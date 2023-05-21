import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Img } from 'src/app/model/slidsImage.model';
import { DataService } from 'src/app/service/data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddImageSlidsComponent } from 'src/app/dialog/add-image-slids/add-image-slids.component';

@Component({
  selector: 'app-image-slide-show',
  templateUrl: './image-slide-show.component.html',
  styleUrls: ['./image-slide-show.component.scss'],
})
export class ImageSlideShowComponent {
  [x: string]: any;
  filename: any;
  base64: any;
  select: any;
  response = {} as Img;
  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    http
      .get(dataService.apiEndpoint + '/image_silde')
      .subscribe((data: any) => {
        console.log(data);
        this.response = data as Img;
      });
  }
  show(option: MatListOption) {
    this.select = option.value;
    console.log(this.select);
  }
  getFile(files: FileList) {
    let file = files.item(0);
    this.filename = file?.name;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      this.base64 = reader.result;
    };
  }
  delete(idx: number) {
    if (confirm('ยันยันการลบข้อมูล ?')) {
      this.http
        .delete(this.dataService.apiEndpoint + '/image_silde/' + idx)
        .subscribe((res) => {
          console.log(res);
          location.reload();
        });
    }
  }

  add() {
    if (confirm('ยืนยันการเพิ่มรูปภาพ') == true) {
      let jsonObj = {
        img_slide: this.base64,
      };
      if(this.response.records.length < 5) {
        let jsonString = JSON.stringify(jsonObj);
        this.http.post(this.dataService.apiEndpoint + '/image_silde/', jsonString, {
            observe: 'response' })
          .subscribe((response: any) => {
            console.log(JSON.stringify(response.status));
            console.log(JSON.stringify(response.body));
            location.reload();
          });
      }else {
        this.dialog.open(AddImageSlidsComponent, {
          minWidth: 500,
        });
      }
    }
  }
}
