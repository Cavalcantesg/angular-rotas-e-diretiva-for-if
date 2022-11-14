import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  constructor() { }

  public produtos:any[] = []

  ngOnInit(): void {
    
    this.produtos.push(
      {
        id: 1,
        nome: 'Banana',
        descricao: 'Uma banana nanica',
        preco: 5.5
      }
    )

    this.produtos.push(
      {
        id: 2,
        nome: 'Maça',
        descricao: 'Uma Ma;ca Pera',
        preco: 8.5
      }
    )
    

  }

}
