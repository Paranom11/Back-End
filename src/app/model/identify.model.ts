export interface IdentifyData {
  records: Record[];
}

export interface Record {
  id_identify:    number;
  text_th:        string;
  text_en:        string;
  id_imgidentify: IDImgidentify;
}

export interface IDImgidentify {
  id_imgidentify: number;
  img:            string;
}