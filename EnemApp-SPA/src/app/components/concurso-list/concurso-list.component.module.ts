import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcursoListRoutingModule } from './concurso-list.component.routing';
import { ConcursoListComponent } from './concurso-list.component';

@NgModule({
  imports: [
    CommonModule,
    ConcursoListRoutingModule,
    FormsModule
  ],
  declarations: [
    ConcursoListComponent
  ]
})
export class ConcursoListModule { }
