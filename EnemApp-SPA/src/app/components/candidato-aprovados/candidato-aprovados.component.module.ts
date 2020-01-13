import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidatoAprovadosComponent } from './candidato-aprovados.component';
import { CandidatoAprovadosRoutingModule } from './candidato-aprovados.component.routing';

@NgModule({
    imports: [
      CommonModule,
      CandidatoAprovadosRoutingModule,
      FormsModule
    ],
    declarations: [
      CandidatoAprovadosComponent
    ]
  })
  export class CandidatoAprovadosModule { }
