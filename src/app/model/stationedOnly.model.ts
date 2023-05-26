export interface stationedOnly {
  records: Record[];
}

export interface Record {
  id_stationed:     number;
  date_start:       string;
  date_end:         string;
  datail_stationed: string;
}
