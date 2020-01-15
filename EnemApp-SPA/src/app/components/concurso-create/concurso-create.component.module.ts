import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcursoCreateComponent } from './concurso-create.component';
import { ConcursoCreateRoutingModule } from './concurso-create.component.routing';

@NgModule({
    imports: [
      CommonModule,
      ConcursoCreateRoutingModule,
      FormsModule
    ],
    declarations: [
      ConcursoCreateComponent
    ]
  })
  export class ConcursoCreateModule { }