import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goToLoginEmpresa(){
    this._router.navigate(["login-company"])
  }

  goToRegistroCandidato(){
    this._router.navigate(["candidato"])
  }

  goToLoginCandidato(){
    this._router.navigate(["login-candidato"])
  }

}
