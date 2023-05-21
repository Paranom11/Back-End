export interface NewsOnly {
  records: Record[];
}

export interface Record {
  id_news:      number;
  text_th:      string;
  date:         string;
  text_en:      null;
  id_type_news: number;
  img:          string;
}
