export interface VeterinaryWorkOnly {
  records: Record[];
}

export interface Record {
  id_word:      number;
  text_th:     string;
  text_en:      null;
  date:         string;
  id_type_work: number;
  img:          string;
}
