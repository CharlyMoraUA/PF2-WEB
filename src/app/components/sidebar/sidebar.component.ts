import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = getRoutes();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

function getRoutes(){
  let usertype = sessionStorage.getItem("usertype")
  console.log('usertype')
  console.log(usertype)
  if(usertype == 'candidato'){
    return [
      { path: '/gestionCandidatos', title: 'Gestion de Candidatos',  icon: '', class: '' },
    ];
  }
  else{
    return [
      { path: '/gestionEmpresas', title: 'Gestion de Empresa',  icon: '', class: '' },
    ];
  }
}
