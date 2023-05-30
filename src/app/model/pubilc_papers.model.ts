export interface PubilcPapers {
  records: Record[];
}

export interface Record {
  id_pubilc_papers: number;
  filepath:         string;
  image_pp:         string;
  name:             string;
}
