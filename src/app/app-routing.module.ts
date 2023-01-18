import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCpfComponent } from './consulta-cpf/consulta-cpf.component';
import { DadosCooperadoComponent } from './dados-cooperado/dados-cooperado.component';

const routes: Routes = [
  { path: 'dados-cooperado/:cpf', component: DadosCooperadoComponent },
  { path: 'consulta-cpf', component: ConsultaCpfComponent },
  { path: '', redirectTo: '/consulta-cpf', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }