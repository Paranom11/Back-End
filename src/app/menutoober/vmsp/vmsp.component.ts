import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DataVetAnimal } from 'src/app/model/DataVetAnimal.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-vmsp',
  templateUrl: './vmsp.component.html',
  styleUrls: ['./vmsp.component.scss']
})
export class VMSPComponent {
  response = {} as DataVetAnimal;
  base64 : any;
  filename : any;

  ///wysiwyg
  htmlContent = '';
  htmlContent1 = '';
  htmlContent2 = '';
  htmlContent3 = '';
  htmlContent4 = '';
  htmlContent5 = '';
  htmlContent6 = '';
  htmlContent7 = '';
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
        this.htmlContent = this.faculty_info.vision_th;
        this.htmlContent1 = this.faculty_info.vision_en;
        this.htmlContent2 = this.faculty_info.mission_th;
        this.htmlContent3 = this.faculty_info.mission_en;
        this.htmlContent4 = this.faculty_info.strategy_th;
        this.htmlContent5 = this.faculty_info.strategy_en;
        this.htmlContent6 = this.faculty_info.agency_th;
        this.htmlContent7 = this.faculty_info.agency_en;
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
    console.log(this.base64);
  }

  //location.reload();

}
updateVMSP(){
  let jsonObj ={
    img_VMSA : this.base64,
    vision_th : this.htmlContent,
    vision_en : this.htmlContent1,
    mission_th : this.htmlContent2,
    mission_en : this.htmlContent3,
    strategy_th : this.htmlContent4,
    strategy_en : this.htmlContent5,
    agency_th : this.htmlContent6,
    agency_en : this.htmlContent7

  }
  if (confirm("ยืนยันการเเก้ไข!") == true) {
    this.http.put(this.data.apiEndpoint+"/information_anihmsu/"+this.faculty_info.id_anihmsu,jsonObj,
    {observe:'response'}).subscribe((response : any)=>
    {console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      location.reload();
    });

  } else {
  }


}
}
