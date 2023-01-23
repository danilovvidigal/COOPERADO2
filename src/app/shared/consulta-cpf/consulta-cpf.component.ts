import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  consultarCpf() {
      if (this.formCpf.valid) {
        this.dadosCooperado = true
        this.buttonNovoCadastro = true
      } else {
        this.dadosCooperado = false
        this.buttonNovoCadastro = false
      }
      
  }

  
}

