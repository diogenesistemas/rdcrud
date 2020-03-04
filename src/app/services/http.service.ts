import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const URL: string = "https://rdcrud.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getgrupos() {
    //Método get, retorna um observável
    return this.http.get(URL + "/grupos");
  }
}
