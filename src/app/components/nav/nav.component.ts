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
      ativo: false,
      lable: 'Home',
      route: "/home"
    },
    {
      ativo: false,
      lable: 'Sobre',
      route: "/sobre"
    },
    {
      ativo: false,
      lable: 'Contato',
      route: "/contato"
    },

  ];

  constructor() {

  }

  ngOnInit(): void {
  }

  destacar(item: iItem) {
    this.itens.forEach(
      (item) => {item.ativo = false}
    );
    item.ativo = true;
  }

}
