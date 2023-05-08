import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Img } from 'src/app/model/slidsImage.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-image-slide-show',
  templateUrl: './image-slide-show.component.html',
  styleUrls: ['./image-slide-show.component.scss']
})
export class ImageSlideShowComponent {
  [x: string]: any;
  filename : any;
  base64 : any;
  select :any;
  response = {} as Img;
  constructor(private dataService : DataService , private http: HttpClient){
      http.get(dataService.apiEndpoint + "/image_silde")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as Img;
  });

}
show(option:MatListOption){
  this.select = option.value;
  console.log(this.select);
}
  getFile(files : FileList){
    let file = files.item(0);
    this.filename = file?.name;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
     // console.log(reader.result);
      this.base64 = reader.result;
    };

  }
  updateSlide(idx : number){
        let jsonObj ={
          img_slide : this.base64
      }

      let jsonString = JSON.stringify(jsonObj);
      this.http.put(this.dataService.apiEndpoint + "/image_silde/"+idx,jsonString,
      {observe:'response'}).subscribe((response: any)=>{
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        location.reload();
      });
    }
  }

