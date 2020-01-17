import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcursoGetComponent } from './concurso-get.component';
import { ConcursoGetRoutingModule } from './concurso-get.component.routing';

@NgModule({
    imports: [
      CommonModule,
      ConcursoGetRoutingModule,
      FormsModule
    ],
    declarations: [
      ConcursoGetComponent
    ]
  })
  export class ConcursoGetModule { }

