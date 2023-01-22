import {CommonModule} from "@angular/common";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConsultaCpfComponent } from "./consulta-cpf/consulta-cpf.component";
import { DadosCooperadoComponent } from "./dados-cooperado/dados-cooperado.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatCardModule } from '@angular/material/card';
import { NgxMaskModule } from "ngx-mask";




@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		NgxMaskModule.forChild()
	],
	declarations: [
		ConsultaCpfComponent,
		DadosCooperadoComponent,
		NavbarComponent,
	],
	exports: [
		ConsultaCpfComponent,
		DadosCooperadoComponent,
		NavbarComponent,

	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule {}