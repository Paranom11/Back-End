import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { DataVetAnimal } from '../model/DataVetAnimal.model';
import { AngularEditorModule } from '@kolkov/angular-editor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  response = {} as DataVetAnimal;
  base64 : any;
  filename : any;
///wysiwyg
  htmlContent = '';
  htmlContent1 = '';
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
        this.htmlContent = this.faculty_info.history_th;
        this.htmlContent1 = this.faculty_info.history_en;
        console.log(this.faculty_info.id_anihmsu);
      },
      error: (err)=>{
        console.log(err);
      }
    }
  )
}
////

getFile(files : FileList){
  let file = files.item(0);
  this.filename = file?.name;
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => {
    this.base64 = reader.result;
  }
}

updateHistory(img_history : string ,history_th:string,history_en:string){
  let jsonObj ={
    img_history : this.base64,
    history_th : this.htmlContent,
    history_en : this.htmlContent1,
  }
  this.http.put(this.data.apiEndpoint+"/information_anihmsu/"+this.faculty_info.id_anihmsu,jsonObj,
  {observe:'response'}).subscribe((response : any)=>
  {console.log(JSON.stringify(response.status));
    console.log(JSON.stringify(response.body));
    location.reload();
  });
}
}
