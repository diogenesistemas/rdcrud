import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.scss']
})
export class NovoProdutoComponent implements OnInit {
  formProduto: FormGroup;

  createForm(produto: Produto) {
    this.formProduto = new FormGroup({
      cod: new FormControl(produto.cod),
      desc: new FormControl(produto.desc),
      regAnvisa: new FormControl(produto.regAnvisa),
      controlado: new FormControl(produto.controlado),
      cod_grupo: new FormControl(produto.cod_grupo),
    });
  }


  constructor() { }

  ngOnInit(): void {
    this.createForm(new Produto())
  }

  enviarProduto(){
    
  }

}
