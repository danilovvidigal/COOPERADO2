import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados-cooperado',
  templateUrl: './dados-cooperado.component.html',
  styleUrls: ['./dados-cooperado.component.scss']
})
export class DadosCooperadoComponent implements OnInit {
  nome: string = "";
  situacao: string = "";
 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const cpf = params.get('cpf');
      //carregar dados do cooperado usando o cpf
      this.nome = "John Doen";
      this.situacao = "Regular";
    
    });
  }
}