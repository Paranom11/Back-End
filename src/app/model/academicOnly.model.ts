export interface AcademicServiceOnly {
  records: Record[];
}

export interface Record {
  id_as:      number;
  text_th:    string;
  id_type_as: number;
  date:       string;
  text_en:    null;
  img:        string;
}
