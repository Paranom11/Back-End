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
import { EditComponent } from './edit/edit.component';
import { EditTypeNewsComponent } from './edit-type-news/edit-type-news.component';
import { type_news } from '../model/type_news.model';

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
  textSearch : string | undefined;
  constructor(private dataService : DataService , private http: HttpClient, private dialog : MatDialog){
    this.textSearch = '';
      http.get(dataService.apiEndpoint + "/news?join=type_news")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as News;
  });

      http.get(dataService.apiEndpoint + "/type_news")
      .subscribe((data : any) => {
        console.log(data);
        this.reTitleNews = data as TitleNews;
    });
}

addNew(){
  this.dataService.countries = this.countries;
  this.dialog.open(InsertNewComponent,{
    minWidth:'300px',
  });
}
show(option:MatListOption){
    this.select = option.value;
    this.dataService.typeNews = option.value;
    console.log(this.dataService.typeNews);
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
edit(){
  this.dataService.countries = this.select;
  this.dialog.open(EditComponent,{
    minWidth: '70%',
  });
}
deleteNews(idx:number){
  if(confirm("ยันยันการลบข้อมูล ?")){
    this.http.delete(this.dataService.apiEndpoint+"/type_news/" + idx)
    .subscribe((res) => {
      console.log(res);
      location.reload();
    });
  }
}
editTypeNews(){
  this.dialog.open(EditTypeNewsComponent,{
    minWidth: '300px',
  });
}

displayResult(text: string) {
  this.textSearch = text
  if (this.textSearch == '') {
    this.http
      .get(this.dataService.apiEndpoint + '/type_news')
      .subscribe((data: any) => {
        console.log(data);
        this.reTitleNews = data as TitleNews;
      });
  } else {
    this.http
      .get(
        this.dataService.apiEndpoint +
          '/type_news?filter=type_th,sw,'+this.textSearch
      )
      .subscribe((data: any) => {
        console.log(data);
        this.reTitleNews = data as TitleNews;
      });
  }
}
}
