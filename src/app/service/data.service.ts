import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint = 'https://anihmsu.comsciproject.net/anihmsu/api.php/records'
  countries: any;
  constructor() { }
}
