import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DataVetAnimal } from 'src/app/model/DataVetAnimal.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  response = {} as DataVetAnimal;

  ///wysiwyg
  htmlContent = '';
  htmlContent1 = '';
  htmlContent2 = '';
  htmlContent3 = '';
  faculty_info : any;

  editorConfig: AngularEditorModule = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},

      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
};
///

  constructor(private data : DataService , private http: HttpClient){
      http.get("https://anihmsu.comsciproject.net/anihmsu/api.php/records/information_anihmsu")
      .subscribe((data : any) => {
        console.log(data);
        this.response = data as DataVetAnimal;
  });
}
////wysiwyg
ngOnInit(): void {
  let url = this.data.apiEndpoint + '/information_anihmsu';
  this.http.get(url, {observe : 'response'}).subscribe(
    {
      next: (data :any)=>{
        this.faculty_info = data.body.records[0];
        this.htmlContent = this.faculty_info.address_th;
        this.htmlContent1 = this.faculty_info.tel;
        this.htmlContent2 = this.faculty_info.email;
        this.htmlContent3 = this.faculty_info.facebook;
        console.log(this.faculty_info.id_anihmsu);
      },
      error: (err)=>{
        console.log(err);
      }
    }
  )
}
////

updateContact(calendar:string,google_Map:string){
  let jsonObj ={
    address_th : this.htmlContent,
    tel : this.htmlContent1,
    email : this.htmlContent2,
    facebook : this.htmlContent3,
    calendar : calendar,
    google_Map : google_Map,

  }
  if(confirm("ยืนยันการเเก้ไข") == true){
    this.http.put(this.data.apiEndpoint+"/information_anihmsu/"+this.faculty_info.id_anihmsu,jsonObj,
    {observe:'response'}).subscribe((response : any)=>
    {console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      location.reload();
    });

  }else{}
  }
}
