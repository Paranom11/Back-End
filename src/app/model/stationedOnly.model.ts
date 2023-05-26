export interface stationedOnly {
id_stationed: any;
date_end: any;
date_start: any;
datail_stationed: any;
  records: Record[];
}

export interface Record {
  id_stationed:     number;
  date_start:       string;
  date_end:         string;
  datail_stationed: string;
}
