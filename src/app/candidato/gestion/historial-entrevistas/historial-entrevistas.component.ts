import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CandidatoCrearService } from 'app/candidato/candidatoCrear.service';

@Component({
  selector: 'app-historial-entrevistas',
  templateUrl: './historial-entrevistas.component.html',
  styleUrls: ['./historial-entrevistas.component.scss']
})
export class HistorialEntrevistasComponent implements OnInit {

  constructor(private candidatoService: CandidatoCrearService,
    public translate: TranslateService) { 
    // Register translation languages
    translate.addLangs(['en', 'es']);
    // Set default language
    translate.setDefaultLang('es');
  }

  listaPrueba:any;

  ngOnInit(): void {
    this.cargarEntrevistas(sessionStorage.getItem("id_candidato"))
  }

  cargarEntrevistas(id_candidato){
    this.candidatoService.obtenerHistorialEntrevista(id_candidato).subscribe(entrevistas=>{
      this.listaPrueba = entrevistas.response
    })
  }

    //Switch language
    translateLanguageTo(lang: string) {
      this.translate.use(lang);
    }

}
