import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultarFichasService } from 'app/empresa/consultar-fichas.service';
import { CrearProyectoService } from 'app/empresa/crear-proyecto.service';
import { Proyecto } from 'app/empresa/representaciones/proyecto';
import { ToastrService } from 'ngx-toastr';
import {SelectionModel} from '@angular/cdk/collections';
import { EquiposDataSource } from 'app/empresa/datasources/EquiposDataSource';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit {
  crearProyectoForm!: FormGroup;
  hide : boolean = true;
  error: boolean = false
  displayedColumns: string[] = ['nombre', 'descripcion', 'seleccionar'];
  equiposDataSource = new EquiposDataSource(this.consultarFichasService);
  selection = new SelectionModel<any>(true, []);

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _router: Router,
    private crearProyectoService: CrearProyectoService,
    private consultarFichasService: ConsultarFichasService) { }

  ngOnInit() {
    this.crearProyectoForm = this.formBuilder.group({
      titulo: ["", [Validators.required, Validators.maxLength(100)]],
      fecha_inicio: ["", [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      fecha_fin: ["", [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    })
    this.equiposDataSource.cargarEquipos(sessionStorage.getItem("id_empresa"), sessionStorage.getItem("empresa-token"));
  }

  myFunction() {
    this.hide = !this.hide;
  }

  backToDashboard(){
    this._router.navigate(["dashboard-empresa"])
  }

  crearProyecto(proyecto: Proyecto){
    this.error = false
    this.crearProyectoService.crearProyecto(proyecto).subscribe(res => {
      if (res.status_code == "200"){
        this.toastr.success("Success", "Company succesfully created")
        this._router.navigate(["dashboard-empresa"])
      }else{
        this.error = true
        this.toastr.error("Error", res.message)  
      }

    },
    error => {
      console.log("Ocurrió un error:")
      console.log(error)
      this.error = true
      this.toastr.error("Error", "Company SignUp error: "+error.error.message)
    })
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.equiposDataSource.equipos$.value.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.equiposDataSource.equipos$.value.forEach(row => this.selection.select(row));
  }

}
