import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gestion-empresa',
  templateUrl: './gestion-empresa.component.html',
  styleUrls: ['./gestion-empresa.component.scss']
})
export class GestionEmpresaComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
  }

  selectedIndex =0
  ngOnInit(): void {
  }

  setMyStyles(indx) {
    let styles
    if(this.selectedIndex==indx){
      styles = {
        'background-color': '#9e4849',
        'border-radius': '5px',
      };
    }else{
      styles = {
        'border-radius': '5px',
      };
    }
    // "background-color : #9e4849; border-radius:; width: 11rem;"
    return styles;
  }

  onClickOption(index){
    this.selectedIndex = index
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
