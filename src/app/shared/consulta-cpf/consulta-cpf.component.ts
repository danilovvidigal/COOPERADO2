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
  disableButton: boolean = true;
  consultando: boolean = false;


  constructor(private router: Router) {
  
    this.formCpf = new FormGroup({
      cpf: new FormControl("", [Validators.required, Validators.pattern("^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$")])
    }); 
    //////////
    this.formCpf.valueChanges.subscribe(val => {
      if(val.cpf){
       this.disableButton = !this.formCpf.valid;
      }
     });
     
    
  }

  consultarCpf() {
    let cpfValido = this.validarCpf(this.cpf);
    if (cpfValido) {
      this.dadosCooperado = true
      this.buttonNovoCadastro = true
    } else {
      this.mensagemErro = true;
      this.buttonNovoCadastro = true;
    }
  } 
  validarCpf(cpf: string): boolean {
    
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
