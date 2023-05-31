

export interface Admin {
  records: Record[];
}

export interface Record {
  id_admin: number;
  email:    string;
  password: string;
  name:     string;
}


