import { Component } from '@angular/core';
import { ImageNews, News, TitleNews } from '../model/News.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  response = {} as News;
  response1 = {} as TitleNews;
  response2 = {} as ImageNews;
  News: any;
  titleNews: any;
  imageNews: any;
  constructor(private dataService : DataService , private http: HttpClient){
      http.get(dataService.apiEndpoint + "/news")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as News;
  });
      http.get(dataService.apiEndpoint + "/title_news")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as TitleNews;
    });

    http.get(dataService.apiEndpoint + "/image_news")
    .subscribe((data : any) => {
      console.log(data);
      this.response = data as ImageNews;
});
}
show(option:MatListOption){
  this.imageNews = option.value;
  console.log(this.imageNews);
}
}
