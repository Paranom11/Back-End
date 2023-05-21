import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint = 'https://anihmsu.comsciproject.net/anihmsu/api.php/records'
  countries : any;
  Personnel: any;
  con : any;
  PersonnelSelected : any;
  News : any;
  idx_type_new : any;
  typeNews : any;
  constructor() { }
}
