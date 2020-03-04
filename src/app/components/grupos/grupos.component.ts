import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];

  constructor(private http: HttpService) {
   
    http.getgrupos();

    this.grupos.push(
      new Grupo(1, "MEDICAMENTOS"),
      new Grupo(2, "PERFUMARIA"),
      new Grupo(3, "TESTE")
    );
  }

  ngOnInit(): void {
  }

}
