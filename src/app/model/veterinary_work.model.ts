export interface VeterinaryWork {
  records: Record[];
}

export interface Record {
  id_word:      number;
  text_th:      string;
  text_en:      null;
  date:         string;
  id_type_work: IDTypeWork;
  img:          string;
}

export interface IDTypeWork {
  id_type_work: number;
  type_th:      string;
  type_en:      string;
  date:         string;
  img_main:     string;
}
