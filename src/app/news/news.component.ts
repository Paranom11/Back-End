import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatListOption } from '@angular/material/list';
import { ImageNews } from '../model/ImageNews.model';
import { TitleNews } from '../model/TitleNews.model';
import { News } from '../model/News.model';
import { InsertNewComponent } from './insert-new/insert-new.component';
import { PersonnelNewComponent } from '../personnel-new/personnel-new.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  reTitleNews = {} as TitleNews;
  reimageNews = {} as ImageNews;
  seNews: any;
  base64 : any;
  countries: any;
  select :any;
  PersonnelSelected : any;
  response = {} as News;
  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog){
      http.get(dataService.apiEndpoint + "/news?join=title_news,&join=image_news,&join=admin")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as News;
  });

      http.get(dataService.apiEndpoint + "/title_news")
      .subscribe((data : any) => {
        console.log(data);
        this.reTitleNews = data as TitleNews;
    });

//     http.get(dataService.apiEndpoint + "/image_news")
//     .subscribe((data : any) => {
//       console.log(data);
//       this.reimageNews = data as ImageNews;
// });
}

addNew(){
  this.dataService.countries = this.countries;
  this.dialog.open(InsertNewComponent,{
    minWidth:'300px',
  });
}
show(option:MatListOption){
  console.log(option.value.id_title_news)
  if(option.value.id_title_news == 1){

    this.select = this.response;
    console.log(this.select);
  }


}
getFile(files : FileList){
  let file = files.item(0);
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => {
   // console.log(reader.result);
    this.base64 = reader.result;
  };
}
}
