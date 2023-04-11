// To parse this data:
//
//   import { Convert, Admin } from "./file";
//
//   const admin = Convert.toAdmin(json);

export interface Admin {
  records: Record[];
}

export interface Record {
  id_admin: number;
  email:    string;
  password: string;
  name:     string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAdmin(json: string): Admin {
      return JSON.parse(json);
  }

  public static adminToJson(value: Admin): string {
      return JSON.stringify(value);
  }
}
