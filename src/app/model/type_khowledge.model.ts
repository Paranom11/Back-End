export interface Type_Khowledge {
  records: Record[];
}

export interface Record {
  id_type_kl: number;
  type_th:    string;
  type_en:    null | string;
  date:       null | string;
  img_main:   string;
}
