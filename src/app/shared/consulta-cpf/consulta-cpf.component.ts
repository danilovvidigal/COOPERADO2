import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';
@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.scss']
})
export class ConsultaCpfComponent {
  cpf: string = "";
  mensagemErro: boolean = false;
  formCpf: FormGroup<{ cpf: FormControl<any>; }>;
  imagePath: any = ""
  dadosCooperado: boolean = false;
  buttonNovoCadastro: boolean = false; 


  constructor(private router: Router) {
  
    this.formCpf = new FormGroup({
      cpf: new FormControl("", [Validators.required, Validators.pattern("^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$")])
    }); 

    this.imagePath = '/assets/imagens/imagemFundo.jpeg'
    
  }

  consultarCpf() {
    //Validação do CPF, aqui você pode colocar sua lógica de validação
    let cpfValido = true;
    if (cpfValido) {
      this.dadosCooperado = true
      this.buttonNovoCadastro = true
    } else {
      this.mensagemErro = true;
    }
  } 


  aplicarMascara(event: any) {
    const cpf = event.target.value;
    event.target.value = this.formatarCpf(cpf);
  }

  formatarCpf(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
  }

  
}
