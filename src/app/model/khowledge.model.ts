export interface Khowledge {
  records: Record[];
}

export interface Record {
  id_knowledge: number;
  text_th:      string;
  text_en:      string;
  date:         string;
  id_type_kl:   IDTypeKl;
  img:          null;
}

export interface IDTypeKl {
  id_type_kl: number;
  type_th:    string;
  type_en:    null;
  date:       string;
  img_main:   string;
}
