import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/gestionCandidatos', title: 'Gestion de Candidatos',  icon: '', class: '' },
    { path: '/editarCandidatos', title: 'Editar mi información',  icon: '', class: '' },
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  ROUTES

  constructor() { }

  ngOnInit() {
    this.ROUTES = getRoutes()
    this.menuItems = this.ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

export function getRoutes() : RouteInfo[]{
  let usertype = sessionStorage.getItem("usertype")
  if(usertype == 'candidato'){
    return [
      { path: '/gestionCandidatos', title: 'Gestion de Candidatos',  icon: '', class: '' },
      { path: '/editarCandidatos', title: 'Editar mi Información',  icon: '', class: '' },
    ];
  }
  else{
    return [
      { path: '/gestion-empresa', title: 'Gestion de Empresa',  icon: '', class: '' },
      { path: '/resultadosEntrevistas', title: 'Resultado Entrevistas',  icon: '', class: '' },
    ];
  }
}
