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
  indexMaxNews : any;
  typeNews : any;
  khowledgeSelect : any; //มีข้อมูลความรู้ที่เลือก
  showSelectTypeUpload : any;
  personnelDuty : any;
  stationedDuty : any;
  constructor() { }
}
