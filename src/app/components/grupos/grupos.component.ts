import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];

  constructor() { 
    this.grupos.push(new Grupo(2, "pipa media"), new Grupo(1, "pipa pequena"), new Grupo(3, "pipa grande"));
  }

  ngOnInit(): void {
  }

}
