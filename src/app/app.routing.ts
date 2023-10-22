import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CandidatoComponent } from './candidato/candidato-crear/candidato.component';
import { LoginCandidatoComponent } from './landing/login-candidato/login-candidato.component';
import { LandingComponent } from './landing/landing.component';
import { LoginEmpresaComponent } from './landing/login-empresa/login-empresa.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  { 
    path: 'login-company',  
    component: LoginEmpresaComponent 
  },
  { 
    path: 'landing',        
    component: LandingComponent },
  { 
    path: 'candidato',        
    component: CandidatoComponent },
  {
    path: 'dashboard',
    redirectTo: 'gestionCandidatos',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  { 
    path: 'login-candidato',  
    component: LoginCandidatoComponent 
  },
  { 
    path: 'crear-empresa',  
    component: CrearEmpresaComponent 
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
