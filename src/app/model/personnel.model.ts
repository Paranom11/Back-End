
export interface Personnel {
  records: Record[];
}

export interface Record {
  id_personnel:         number;
  name_th:              string;
  name_en:              string;
  aptitude_th:          string;
  aptitude_en:          string;
  academic_position_th: string;
  academic_position_en: string;
  type_personnel_th:    string;
  type_personnel_en:    string;
  name_prefix_th:       string;
  name_prefix_en:       string;
  email:                string;
  phone_number:         string;
  picture:              Text;
}