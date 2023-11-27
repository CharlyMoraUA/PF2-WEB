import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConsultarProyectosService } from 'app/empresa/consultar-proyectos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.scss']
})
export class MisProyectosComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private _router: Router,
    private consultaProyectosService: ConsultarProyectosService,
    public translate: TranslateService) { 
      // Register translation languages
      translate.addLangs(['en', 'es']);
      // Set default language
      translate.setDefaultLang('es');
  }

  listaProyectos:any[]= [];

  ngOnInit() {
    this.consultarProyectos()
  }

  consultarProyectos(){
    this.consultaProyectosService.consultarProyectos(sessionStorage.getItem("id_empresa"), sessionStorage.getItem("empresa-token")).subscribe(proyectos=>{
      let proyectosArray = proyectos["proyectos"];
        proyectosArray.forEach((equipo: any) => {
          this.listaProyectos.push(equipo)
        });
    })
  }

  navigateToAddProject(){
    sessionStorage.setItem("pantalla_proyectos", "crear-proyecto")
    sessionStorage.setItem("pantalla_proyectos_index", "0")
    this.reloadComponent(true)
  }

  navigateToEditProject(proyecto:any){
    sessionStorage.setItem("pantalla_proyectos", "editar-proyecto")
    sessionStorage.setItem("pantalla_proyectos_index", "0")
    sessionStorage.setItem("proyecto_editar", JSON.stringify(proyecto))
    sessionStorage.setItem("proyecto_editar_id", JSON.stringify(proyecto.id))
    this.reloadComponent(true)
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   console.log("Current route I am on:",this._router.url);
   const url=self ? this._router.url :urlToNavigateTo;
   this._router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this._router.navigate([`/${url}`]).then(()=>{
       console.log(`After navigation I am on:${this._router.url}`)
     })
   })
 }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
