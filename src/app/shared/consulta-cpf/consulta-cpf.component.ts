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
  mensagemErro: string = "";
  formCpf: FormGroup<{ cpf: FormControl<any>; }>;
  imagePath: any = ""
  dadosCooperado: boolean = false;
  buttonNovoCadastro: boolean = false;
  disableButton: boolean = false;
  consultando: boolean = false;
  erroMensege: string = "Informe um CPF válido";
  inputTocado: boolean = false;
  botaoClicado: boolean = false;


  constructor(private router: Router) {

    this.formCpf = new FormGroup({
      cpf: new FormControl("", [Validators.required, Validators.pattern("^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$")])
    });
    //////////
    this.formCpf.valueChanges.subscribe(val => {
      if (val.cpf) {
        this.disableButton = !this.formCpf.valid;
      }
    });
  }

  consultarCpf() {
    debugger;
    
    let cpfValido = this.validarCpf(this.formCpf.controls.cpf.value);
    this.botaoClicado = true;
    if (cpfValido) {
      this.dadosCooperado = true
      this.buttonNovoCadastro = true
    } else {
      this.mensagemErro = this.erroMensege;
     // this.buttonNovoCadastro = false;
    }
  }

  validarCpf(cpf: string): boolean {
    debugger;
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) {
      return false;
    }
    if (cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999') {
      return false;
    }
    let add = 0;
    let i;
    for (i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return false;
    }
    add = 0;
    for (i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }



  aplicarMascara(event: any) {
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
  }


}