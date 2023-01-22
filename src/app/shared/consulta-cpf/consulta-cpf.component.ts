import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validadorCpf } from 'src/app/utils/form';

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.scss']
})
export class ConsultaCpfComponent {
  cpf: string = '';
  mensagemErro: string = "";
  formCpf: FormGroup;
  dadosCooperado: boolean = false;
  buttonNovoCadastro: boolean = false;
  disableButton: boolean = false;
  consultando: boolean = false;
  inputTocado: boolean = false;
  erroExibido: boolean = false;
  cpfValido: boolean = false;


  constructor( private formBuilder : FormBuilder) {

    this.formCpf = this.formBuilder.group({
      cpf: new FormControl(
        "", 
        Validators.compose([Validators.required, validadorCpf]))
      });
   
  }

  /*consultarCpf() {
    if(this.formCpf.invalid) {
    } else {
      let cpfValido = this.validarCpf(this.formCpf.controls.cpf.value);
      this.botaoClicado = true;
      if (cpfValido) {
        this.dadosCooperado = true;
        this.buttonNovoCadastro = true;
        this.erroExibido = false;
      } else {
        this.erroExibido = true;
        this.mensagemErro = this.erroMensege;
      }
    }   
  } */

/*  consultarCpf() {
    if(this.formCpf.invalid) {
      this.erroExibido = true;
      this.botaoClicado = true; 
    } else {
      this.erroExibido = false;
      this.botaoClicado = false; 
      let cpfValido: boolean = this.validarCpf(this.formCpf.controls.cpf.value);
      if (cpfValido) {
        this.dadosCooperado = true
        this.buttonNovoCadastro = true
      } else {
        this.erroExibido = true;
        this.mensagemErro = this.erroMensege;
      }
    }   
  } */

  consultarCpf() {
      if (this.formCpf.valid) {
        this.dadosCooperado = true
        this.buttonNovoCadastro = true
      } else {
        this.dadosCooperado = false
        this.buttonNovoCadastro = false
      }
      
  }

  /*  aplicarMascara(event: any) {
    const cpf = event.target.value;
    if (cpf.length <= 14) {
      event.target.value = this.formatarCpf(cpf);
    } else {
      event.target.value = cpf.slice(0, 14);
    }
  }

  formatarCpf(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
  }*/

}

