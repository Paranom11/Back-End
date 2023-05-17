export interface News {
  records: Record[];
}
export interface Record {
  id_news:      number;
  text_th:      string;
  date:         string;
  text_en:      null;
  id_type_news: IDTypeNews;
  img:          string;
}

export interface IDTypeNews {
  id_type_news: number;
  type_th:      string;
  type_en:      null;
  date:         string;
  img:          null;
}
