import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCpfComponent } from './shared/consulta-cpf/consulta-cpf.component';
import { DadosCooperadoComponent } from './shared/dados-cooperado/dados-cooperado.component';



//const routes: Routes = [
 // { path: 'dados-cooperado/:cpf', component: DadosCooperadoComponent },
 // { path: 'consulta-cpf', component: ConsultaCpfComponent },
 // { path: '', redirectTo: '/consulta-cpf', pathMatch: 'full' }

 const routes: Routes = [
  { path: 'dados-cooperado/:cpf', component: DadosCooperadoComponent  },
  { path: 'consulta-cpf', component: ConsultaCpfComponent },
  { path: '', redirectTo: '/consulta-cpf', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }