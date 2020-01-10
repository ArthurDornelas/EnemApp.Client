import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidatoListRoutingModule } from './candidato-list.component.routing';
import { CandidatoListComponent } from './candidato-list.component';

@NgModule({
  imports: [
    CommonModule,
    CandidatoListRoutingModule,
    FormsModule
  ],
  declarations: [
    CandidatoListComponent
  ]
})
export class CandidatoListModule { }
