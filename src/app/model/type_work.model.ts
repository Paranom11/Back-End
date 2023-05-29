export interface TypeWork {
  records: Record[];
}

export interface Record {
  id_type_work: number;
  type_th:      string;
  type_en:      string;
  date:         null | string;
  img_main:     null | string;
}
