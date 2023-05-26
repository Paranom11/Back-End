export interface Agency {
  records: Record[];
}

export interface Record {
  id_agency:      number;
  name_agency_th: string;
  name_agency_en: string;
  link:           string;
  id_type_agency: IDTypeAgency;
}

export interface IDTypeAgency {
  id_type_agency: number;
  name_agency_th: string;
  name_agency_en: string;
}
