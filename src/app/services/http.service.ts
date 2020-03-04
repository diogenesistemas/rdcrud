import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Grupo } from '../models/Grupo';
import { map } from "rxjs/operators";

const URL: string = "https://rdcrud.herokuapp.com";

function AdaptadorDeGrupo(data: any[]) {
  return data.map(
    (el) => { return new Grupo(el.COD_GRUPO, el.DESC) }
  )
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getgrupos() {
    //Método get, retorna um observável
    let obs = this.http.get(URL + "/grupos");
    // a função .pipe encadeia vários métodos com um retorno aepnas, para o resultado do observável que veio no get
    return obs.pipe(
      //primeiro map do reativo encadeado, que e é um operator. 
      map(AdaptadorDeGrupo));
  }
}
