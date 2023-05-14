export interface News {
  records: Record[];
}
export interface Record {
  id_news:      number;
  text_news_th: string;
  date:         string;
  text_news_en: string;
  id_title_new: IDTitleNew;
  id_admin:     IDAdmin;
  id_imgnew:    IDImgnew;
}
export interface IDAdmin {
  id_admin: number;
  email:    string;
  password: string;
  name:     string;
}

export interface IDImgnew {
  id_imgnew: number;
  img_news:  string;
}

export interface IDTitleNew {
  id_title_news: number;
  title_news_th: string;
  title_news_en: string;
  img_news_main: string;
}
