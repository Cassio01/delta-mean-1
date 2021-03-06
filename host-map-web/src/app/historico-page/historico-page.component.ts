import { Component, OnInit } from '@angular/core';
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'fd-historico-page',
  templateUrl: './historico-page.component.html',
  styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {


  historico: Localizacao[];

  constructor(private httpClient: HttpClientService, private _router:Router) {

  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api').subscribe((docs)=>{this.historico = docs});
  }

  consultar(dominio): void{
  this._router.navigate(["/map", dominio]);
}

}
