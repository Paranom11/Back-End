export interface Conferenc {
  records: Record[];
}

export interface Record {
  id_conference: number;
  name:          string;
  linkfile:      string;
  id_admin:      IDAdmin;
  date:          string;
}

export interface IDAdmin {
  id_admin: number;
  email:    string;
  password: string;
  name:     string;
}
