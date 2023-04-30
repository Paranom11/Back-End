export interface News {
  records: Record[];
}
export interface Record {
  id_news:      number;
  text_news_th: string;
  date:         string;
  text_news_en: string;
  id_title_new: number;
  id_admin:     number;
}

