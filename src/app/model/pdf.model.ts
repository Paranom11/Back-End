export interface Upload {
  records: Record[];
}

export interface Record {
  id_upload:      number;
  id_type_upload: IDTypeUpload;
  name:           string;
  link:           null;
  date:           string;
}

export interface IDTypeUpload {
  id_type_upload: number;
  type_name:      string;
}
