import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

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
  console.log('usertype')
  console.log(usertype)
  if(usertype == 'candidato'){
    return [
      { path: '/gestionCandidatos', title: 'Gestion de Candidatos',  icon: '', class: '' },
    ];
  }
  else{
    return [
      { path: '/gestion-empresa', title: 'Gestion de Empresa',  icon: '', class: '' },
    ];
  }
}
