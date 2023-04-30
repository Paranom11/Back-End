// export interface News {
//   records: Record[];
// }
// export interface Record {
//   id_news:      number;
//   text_news_th: string;
//   date:         string;
//   text_news_en: string;
//   id_title_new: number;
//   id_admin:     number;
// }

// export interface TitleNews {
//   records1: Record[];
// }
// export interface Record {
//   id_title_news: number;
//   title_news_th: string;
//   title_news_en: string;
//   img_news_main: string;
// }

export interface ImageNews {
  records: Record[];
}
export interface Record {
  id_imgnew: number;
  img_news:  string;
  id_news:   number;
}
