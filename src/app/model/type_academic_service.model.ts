export interface TypeAcademicService {
  records: Record[];
}

export interface Record {
  id_type_as: number;
  type_th:    string;
  type_en:    null;
  date:       string;
  img_main:   string;
}
