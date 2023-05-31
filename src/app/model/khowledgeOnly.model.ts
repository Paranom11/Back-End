export interface KhowledgeOnly {
  records: Record[];
}

export interface Record {
  id_knowledge: number;
  text_th:      string;
  text_en:      string;
  date:         string;
  id_type_kl:   number;
  img:          string;
}
