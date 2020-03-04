import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service'

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];

  constructor(private http: HttpService) {

    //getgrupos retorna um observável, porém o subscribe
    //sobrescreve um observador a um observável
    this.http.getGrupos().subscribe(
      (data) => {
        this.grupos = data;
      });

  }

  ngOnInit(): void {
  }

}
