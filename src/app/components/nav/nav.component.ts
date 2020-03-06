import { Component, OnInit } from '@angular/core';


interface iItem {
  lable: string;
  route: string;
  ativo: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  itens: iItem[] = [
    {
      ativo: true,
      lable: 'Home',
      route: "/"
    },
    {
      ativo: false,
      lable: 'Sobre',
      route: "/sobre"
    },
    {
      ativo: true,
      lable: 'Contato',
      route: "/contato"
    },

  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}
