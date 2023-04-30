import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatListOption } from '@angular/material/list';
import { ImageNews } from '../model/ImageNews.model';
import { TitleNews } from '../model/TitleNews.model';
import { News } from '../model/News.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  reNews = {} as News;
  reTitleNews = {} as TitleNews;
  reimageNews = {} as ImageNews;
  seNews: any;

  countries: any;
  dialog: any;
  constructor(private dataService : DataService , private http: HttpClient){
      http.get(dataService.apiEndpoint + "/news")
      .subscribe((data : any) => {
        console.log(data);
        this.reNews = data as News;
  });
      http.get(dataService.apiEndpoint + "/title_news")
      .subscribe((data : any) => {
        console.log(data);
        this.reTitleNews = data as TitleNews;
    });

    http.get(dataService.apiEndpoint + "/image_news")
    .subscribe((data : any) => {
      console.log(data);
      this.reimageNews = data as ImageNews;
});
}

addNew(): void{
  this.dataService.countries = this.countries;
  this.dialog.open(NewsComponent,{
    minWidth:'300px',
  });
}
show(option:MatListOption){
  this.seNews = option.value;
  console.log(this.seNews);
}
}
