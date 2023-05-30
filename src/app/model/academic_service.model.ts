export interface AcademicService {
  records: Record[];
}

export interface Record {
  id_as:      number;
  text_th:    string;
  id_type_as: IDTypeAs;
  date:       string;
  text_en:    null;
  img:        string;
}

export interface IDTypeAs {
  id_type_as: number;
  type_th:    string;
  type_en:    null;
  date:       string;
  img_main:   string;
}
