import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gestion-empresa',
  templateUrl: './gestion-empresa.component.html',
  styleUrls: ['./gestion-empresa.component.css']
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

  selectedIndex = 0
  pantallaProyectos = "mis-proyectos"
  
  ngOnInit(): void {
    this.pantallaProyectos = sessionStorage.getItem("pantalla_proyectos")
    this.selectedIndex = parseInt(sessionStorage.getItem("pantalla_proyectos_index"))
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
    sessionStorage.setItem("pantalla_proyectos_index", index)
    if(index==0){
      this.pantallaProyectos = "mis-proyectos"
    }
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
